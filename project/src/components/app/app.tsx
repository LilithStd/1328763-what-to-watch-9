import {Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import {isCheckedAuth} from '../../utils';
import {Main} from '../../pages/main/main';
import {SignIn} from '../../pages/sign-in/sign-in';
import {MyList} from '../../pages/my-list/my-list';
import {Film} from '../../pages/film/film';
import {Player} from '../../pages/player/player';
import {AddReview} from '../../pages/add-review/add-review';
import {NotFound} from '../../pages/not-found/not-found';
import {PrivateRoute} from '../private-route/private-route';
import {useAppSelector} from '../../hooks/reduser';
import {LoadingScreen} from '../loading-screen/loading-screen';
import {HistoryRouter} from '../history-route/history-route';
import browserHistory from '../../browser-history';
import {getFilmPromo, getFilmsDataLoaded} from '../../store/film-data/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

function App(){
  const filmPromo = useAppSelector(getFilmPromo);
  const filmsDataLoaded = useAppSelector(getFilmsDataLoaded);
  const authStatus = useAppSelector(getAuthorizationStatus);

  if (filmPromo === null || !filmsDataLoaded || isCheckedAuth(authStatus)) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<Main/>}/>
        <Route path={AppRoute.SignIn} element={<SignIn/>}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={authStatus}>
            <MyList/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element={<Film/>}/>
        <Route path={AppRoute.AddReview} element={
          <PrivateRoute authorizationStatus={authStatus}>
            <AddReview />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Player} element={<Player/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </HistoryRouter>
  );
}

export {App};
