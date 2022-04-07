import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../store';
import {store} from '../store';
import {FilmTypes, Comment, PostFilmToFavorite} from '../types/types';
import {loadFilms, loadPromoFilm, loadReviews, loadSimilarFilms, loadFavoriteFilms, loadCurrentFilm, addCurrentFilmToFavorite, addPromoFilmToFavorite,resetFavoriteFilm, sendReviewStatus} from '../store/film-data/film-data';
import {requireAuthorization} from '../store/user-process/user-process';
import {setError} from '../store/error-data/error-data';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus,TIMEOUT_SHOW_ERROR, FilmRoute, ReviewSendStatus} from '../const';
import {errorHandle} from '../services/error-handle';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';

export const clearErrorAction = createAsyncThunk(
  'films/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchFilmsAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    try {
      const {data} = await api.get<FilmTypes[]>(APIRoute.Films);
      store.dispatch(loadFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch(error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      store.dispatch(resetFavoriteFilm());
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const addReviewAction = createAsyncThunk(
  'user/commentsSubmit',
  async ({id, dataComment}: Comment ) => {
    try{
      store.dispatch(sendReviewStatus(ReviewSendStatus.SENDING));
      await api.post<Comment>(`/comments/${id}`, dataComment);
      store.dispatch(sendReviewStatus(ReviewSendStatus.SUCCESS));
    }catch(error){
      errorHandle(error);
      store.dispatch(sendReviewStatus(ReviewSendStatus.ERROR));
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const fetchCommentsAction = createAsyncThunk(
  'data/fetchComments',
  async (id: number) => {
    try{
      const {data} = await api.get(`comments/${id}`);
      store.dispatch(loadReviews(data));
    }catch(error){
      errorHandle(error);
    }
  },
);

export const fetchPromoFilmAction = createAsyncThunk(
  'data/fetchPromoFilm',
  async () => {
    try {
      const {data} = await api.get<FilmTypes>(FilmRoute.PromoFilm);
      store.dispatch(loadPromoFilm(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchShowMoreFilmsAction = createAsyncThunk(
  'data/fetchShowMoreFilms',
  async(id: number) => {
    try{
      const {data} = await api.get(`films/${id}/similar`);
      store.dispatch(loadSimilarFilms(data));
    }catch(error){
      errorHandle(error);
    }
  },
);

export const fetchFavoriteFilms = createAsyncThunk(
  'data/fetchFavoriteFilms',
  async() => {
    try{
      const {data} = await api.get('/favorite');
      store.dispatch(loadFavoriteFilms(data));
    }catch(error){
      errorHandle(error);
    }
  },
);


export const fetchCurrentFilmsAction = createAsyncThunk(
  'data/fetchFilm',
  async (id: number) => {
    try{
      const {data} = await api.get(`/films/${id}`);
      store.dispatch(loadCurrentFilm(data));
    }catch(error){
      errorHandle(error);
    }
  },
);

export const postFilmToFavorite = createAsyncThunk(
  'data/pushFavoriteFilms',
  async ({id, status}: PostFilmToFavorite) => {
    try {
      await api.post<PostFilmToFavorite>(`${APIRoute.Favorite}/${id}/${status}`);
      store.dispatch(fetchFavoriteFilms());
      store.dispatch(addCurrentFilmToFavorite(status));
      store.dispatch(addPromoFilmToFavorite(status));
    } catch (error) {
      errorHandle(error);
    }
  },
);
