import {createAction} from '@reduxjs/toolkit';
import { FilmTypes, CommentProps} from '../types/types';
import { AuthorizationStatus } from '../const';


export const changeGenre = createAction<string>('CHANGE_GENRE');
export const changeCountFilmToShow = createAction('CHANGE_COUNT_FILM_TO_SHOW');
export const loadFilms = createAction<FilmTypes[]>('data/load-films');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const loadCommentsServer = createAction<CommentProps[]>('LOAD_COMMENTS_SERVER');
export const setError = createAction<string>('films/setError');
export const loadPromoFilm = createAction<FilmTypes | null>('data/load-promo-film');

