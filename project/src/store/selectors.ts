import {FilmTypes, CommentReview} from '../types/types';
import {AuthorizationStatus} from '../const';

export const getReviews = (state: { reviews: CommentReview[] }) => state.reviews;
export const getFilms = (state: { films: FilmTypes[] }) => state.films;
export const getCurrentFilm = (state: { currentFilm: FilmTypes }) => state.currentFilm;
export const getFilteredFilm = (state: { filteredFilms : FilmTypes[]}) => state.filteredFilms;
export const getMoreLikeFilms = (state: {moreLikeFilms: FilmTypes[]}) => state.moreLikeFilms;
export const getFavoriteFilms = (state: {favoriteFilms: FilmTypes[]}) => state.favoriteFilms;
export const getGenre = (state: { genre: string }) => state.genre;
export const getCountFilmToshow = (state: { countFilmToshow: number; }) => state.countFilmToshow;
export const getFilmPromo = (state: { filmPromo: FilmTypes}) => state.filmPromo;
export const getFilmsDataLoading = (state: {isFilmsDataLoaded: boolean; }) => state.isFilmsDataLoaded;
export const getAuthorizationStatus = (state: {authorizationStatus: AuthorizationStatus}) => state.authorizationStatus;
export const getError = (state: {error: string}) => state.error;
