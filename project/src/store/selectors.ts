import {FilmTypes, CommentProps} from '../types/types';

export const getReviews = (state: { reviews: CommentProps[] }) => state.reviews;
export const getFilms = (state: { films: FilmTypes[] }) => state.films;
export const getFilteredFilm = (state: { filteredFilm : FilmTypes[]}) => state.filteredFilm;
export const getCountFilmToshow = (state: { countFilmToshow: number; }) => state.countFilmToshow;
export const getFilmPromo = (state: { filmPromo: FilmTypes}) => state.filmPromo;
