import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
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
import {getFilms, getReviews, getFilmPromo, getFilmsDataLoading} from '../../store/selectors';


function App(){
  const filmPromo = useAppSelector(getFilmPromo);
  const films = useAppSelector(getFilms);
  const reviews = useAppSelector(getReviews);
  const filmsDataLoaded = useAppSelector(getFilmsDataLoading);


  if (filmPromo === null || !filmsDataLoaded) {
    return (
      <LoadingScreen />
    );
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main filmPromo = {filmPromo}/>}/>
        <Route path={AppRoute.SignIn} element={<SignIn/>}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <MyList films={films}/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element={<Film films = {films} reviews ={reviews}/>}/>
        <Route path={AppRoute.AddReview} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <AddReview films = {films}/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Player} element={<Player films = {films}/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export {App};
