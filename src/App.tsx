import Main from './pages/main/Main.tsx';
import Root from './Root.tsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import SignInPage from './pages/signIn/SignInPage.tsx';
import Player from './pages/player/Player.tsx';
import MyList from './pages/myList/MyList.tsx';
import Film from './pages/film/Film.tsx';
import AddReview from './pages/addReview/AddReview.tsx';
import './App.css';
import NotFound from './pages/notFound/NotFound.tsx';
import PrivateRoute from './components/PrivateRoute.tsx';
import { mainLoader } from './pages/main/MainLoader.ts';
import { myListLoader } from './pages/myList/MyListLoader.ts';
import { filmLoader } from './pages/film/FilmLoader.ts';
import {AuthProvider} from './hooks/AuthorizationHook.tsx';
import NoAuthRoute from './components/NoAuthRoute.tsx';
import {AddReviewLoader} from './pages/addReview/AddReviewLoader.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {index: true, element:<Main />, loader: mainLoader},
      {path:'/mylist', element:<PrivateRoute><MyList /></PrivateRoute>, loader: myListLoader},
      {path:'/login', element:<NoAuthRoute><SignInPage /></NoAuthRoute>},
      {path:'/films/:id', element:<Film />, loader: filmLoader},
      {path:'/films/:id/review', element:<PrivateRoute><AddReview/></PrivateRoute>, loader: AddReviewLoader},
      {path:'/player/:id', element:<Player />, loader: filmLoader},
      {path:'*', element:<NotFound />},
    ]
  },
]);

function App() {
  return (
    <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  );
}

export default App;
