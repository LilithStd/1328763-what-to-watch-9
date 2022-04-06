import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getReviews = (state: State) => state[NameSpace.data].reviews;
export const getReviewsDataLoaded = (state: State) => state[NameSpace.data].isReviewsDataLoaded;
export const getFilms = ((state: State) => state[NameSpace.data].films);
export const getFilmsDataLoaded = ((state: State) => state[NameSpace.data].isFilmsDataLoaded);
export const getCurrentFilm = (state: State) => state[NameSpace.data].currentFilm;
export const getCurrentFilmDataLoaded = (state: State) => state[NameSpace.data].isCurrentFilmDataLoaded;
export const getSimilarFilms = (state: State) => state[NameSpace.data].similarFilms;
export const getSimilarFilmsDataLoaded = (state: State) => state[NameSpace.data].isSimilarFilmsDataLoaded;
export const getFavoriteFilms = (state: State) => state[NameSpace.data].favoriteFilms;
export const getFavoriteFilmsDataLoaded = (state: State) => state[NameSpace.data].isFavoriteFilmsDataLoaded;
export const getGenre = ((state: State) => state[NameSpace.data].genre);
export const getCountFilmToShow = (state: State) => state[NameSpace.data].countFilmToshow;
export const getFilmPromo = ((state: State) => state[NameSpace.data].filmPromo);
export const getReviewSendStatus = (state: State) => state[NameSpace.data].reviewSendStatus;
