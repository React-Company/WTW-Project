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
import {AuthorizationStatus} from './const.ts';
import PrivateRoute from './components/PrivateRoute.tsx';
import { mainLoader } from './pages/main/MainLoader.ts';
import { myListLoader } from './pages/myList/MyListLoader.ts';
import { filmLoader } from './pages/film/FilmLoader.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {index: true, element:<Main name="The Grand Budapest Hotel" genre="drama" year={2014} />, loader: mainLoader},
      {path:'/mylist', element:<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth} ><MyList /></PrivateRoute>, loader: myListLoader},
      {path:'/login', element:<SignInPage />},
      {path:'/films/:id', element:<Film />, loader: filmLoader},
      {path:'/films/:id/review', element:<AddReview/>},
      {path:'/player/:id', element:<Player />, loader: filmLoader},
      {path:'*', element:<NotFound />},
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
