import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthorizationStatus } from '../const';

interface LoginData {
  email: string;
  password: string;
}

export interface userDataType {
  id: number;
  email: string;
  name: string;
  avatarUrl: string;
  token: string;
}

interface AuthContextType {
  authorizationStatus: AuthorizationStatus;
  userData: userDataType;
  isLoading: boolean;
  error: string | null;
  login: (data: LoginData) => Promise<void>;
  logout: () => Promise<void>;
}

const defaultUserData: userDataType = {
  id: 0,
  email: '',
  name: '',
  avatarUrl: '',
  token: '',
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authorizationStatus, setAuthorizationStatus] = useState<AuthorizationStatus>(AuthorizationStatus.NoAuth);
  const [userData, setUserData] = useState<userDataType>(defaultUserData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Проверка авторизации при монтировании
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser) as userDataType;
        if (user.token && user.email) {
          setUserData(user);
          setAuthorizationStatus(AuthorizationStatus.Auth);
        }
      } catch (e) {
        console.error('Failed to parse user data', e);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const login = async ({ email, password }: LoginData) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await axios.post<userDataType>('https://12.react.htmlacademy.pro/wtw/login', { email, password });
      localStorage.setItem('user', JSON.stringify(res.data));
      setUserData(res.data);
      setAuthorizationStatus(AuthorizationStatus.Auth);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || 'Login failed');
      } else {
        setError('An unexpected error occurred');
      }
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await axios.delete('https://12.react.htmlacademy.pro/wtw/logout', {
        headers: { 'X-Token': userData.token },
      });
      localStorage.removeItem('user');
      setUserData(defaultUserData);
      setAuthorizationStatus(AuthorizationStatus.NoAuth);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || 'Logout failed');
      } else {
        setError('An unexpected error occurred');
      }
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authorizationStatus,
        userData,
        isLoading,
        error,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Кастомный хук для удобного использования контекста
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
