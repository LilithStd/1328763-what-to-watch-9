import {createAction} from '@reduxjs/toolkit';
import { FilmTypes, CommentProps, StatusFilmData} from '../types/types';
import { AuthorizationStatus } from '../const';

export const changeGenre = createAction<string>('CHANGE_GENRE');
export const changeCountFilmToShow = createAction('CHANGE_COUNT_FILM_TO_SHOW');
export const loadFilms = createAction<FilmTypes[]>('DATA/LOAD_FILMS');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const addFavoriteFilm = createAction<FilmTypes[]>('DATA/ADD_FAVORITE_FILM');
export const changeStatusUserFilm = createAction<StatusFilmData>('TRUE_FALSE_FILM');
export const loadComments = createAction<CommentProps[]>('DATA/LOAD_COMMENTS');
export const loadCurrentFilm = createAction<FilmTypes>('DATA/LOAD_CURRENT_FILM');
export const setError = createAction<string>('films/setError');
export const loadPromoFilm = createAction<FilmTypes>('DATA/LOAD_PROMO_FILM');
export const loadMoreLikeFilms = createAction<FilmTypes[]>('DATA/LOAD_MORE_LIKE_FILMS_SERVER');
export const loadFavoriteFilms = createAction<FilmTypes[]>('DATA/LOAD_FAVORITE_FILMS_SERVER');
