import {FilmTypes, CommentProps} from '../types/types';

export const getReviews = (state: { reviews: CommentProps[] }) => state.reviews;
export const getFilms = (state: { films: FilmTypes[] }) => state.films;
export const getFilteredFilm = (state: { filteredFilm : FilmTypes[]}) => state.filteredFilm;
export const getGenre = (state: { genre: string }) => state.genre;
export const getCountFilmToshow = (state: { countFilmToshow: number; }) => state.countFilmToshow;
export const getFilmPromo = (state: { filmPromo: FilmTypes | null}) => state.filmPromo;
export const getFilmsDataLoading = (state: {isFilmsDataLoaded: boolean; }) => state.isFilmsDataLoaded;
export const getAuthorizationStatus = (state: {authorizationStatus: string}) => state.authorizationStatus;
export const getError = (state: {error: string}) => state.error;
