import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import Player from '../../pages/player/player';
import AddReview from '../../pages/add-review/add-review';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import {AppRoute, AuthorizationStatus} from '../../const';
import {Movie} from '../../types/types';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

type AppProps = Movie;

function App(appProps: AppProps){
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main {...appProps}/>}/>
        <Route path={AppRoute.SignIn} element={<SignIn/>}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyList/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element={<Film/>}/>
        <Route path={AppRoute.AddReview} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <AddReview/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Player} element={<Player/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
