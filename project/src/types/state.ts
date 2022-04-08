import { store } from '../store';
import {FilmTypes, CommentReview} from '../types/types';
import {AuthorizationStatus} from '../const';

export type FilmData = {
  films : FilmTypes[]
  filmPromo: FilmTypes
  similarFilms: FilmTypes[]
  favoriteFilms: FilmTypes[]
  currentFilm: FilmTypes;
  genre: string
  reviews: CommentReview[]
  countFilmToshow: number
  reviewSendStatus: string
  isFilmsDataLoaded: boolean
  isCurrentFilmDataLoaded: boolean
  isPromoFilmDataLoaded: boolean
  isReviewsDataLoaded: boolean
  isSimilarFilmsDataLoaded: boolean
  isFavoriteFilmsDataLoaded: boolean
  error: string
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
}

export type ErrorServerData = {
  error: string
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
