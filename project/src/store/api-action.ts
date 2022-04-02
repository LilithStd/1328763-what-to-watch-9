import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../store';
import {store} from '../store';
import {FilmTypes, Comment} from '../types/types';
import {loadFilms, requireAuthorization, setError, loadPromoFilm, loadComments, loadMoreLikeFilms, loadFavoriteFilms, loadCurrentFilm} from './actions';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus,TIMEOUT_SHOW_ERROR, FilmRoute} from '../const';
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
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const commentsAction = createAsyncThunk(
  'user/commentsSubmit',
  async ({id, dataComment}: Comment ) => {
    try{
      await api.post<Comment>(`/comments/${id}`, dataComment);
    }catch(error){
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const fetchCommentsAction = createAsyncThunk(
  'data/fetchComments',
  async (id: number) => {
    try{
      const {data} = await api.get(`comments/${id}`);
      store.dispatch(loadComments(data));
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
      store.dispatch(loadMoreLikeFilms(data));
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
