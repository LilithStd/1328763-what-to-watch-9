import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, changeCountFilmToShow, loadFilms, requireAuthorization, setError, loadPromoFilm, loadComments, loadFavoriteFilms, loadMoreLikeFilms, loadCurrentFilm} from '../store/actions';
import {FilmTypes, CommentProps} from '../types/types';
import {DEFAULT_GENRE,INITIAL_QUANTITY_FILMS, AuthorizationStatus} from '../const';


type ReducerProps = {
  films : FilmTypes[]
  filmPromo: FilmTypes
  moreLikeFilms: FilmTypes[]
  favoriteFilms: FilmTypes[]
  currentFilm: FilmTypes;
  genre: string
  reviews: CommentProps[]
  filteredFilms : FilmTypes[]
  countFilmToshow: number
  authorizationStatus: AuthorizationStatus
  isFilmsDataLoaded: boolean
  error: string
}

const filmPromo = {
  id: 0,
  name: '',
  posterImage: '',
  previewImage: '',
  backgroundImage: '',
  backgroundColor: '',
  videoLink: '',
  previewVideoLink: '',
  description: '',
  rating: 0,
  scoresCount: 0,
  director: '',
  starring: [''],
  runTime: 0,
  genre: '',
  released: 0,
  isFavorite: true,
};


const initialState: ReducerProps = {
  genre: DEFAULT_GENRE,
  films: [],
  filmPromo: filmPromo,
  currentFilm: filmPromo,
  reviews: [],
  filteredFilms: [],
  moreLikeFilms: [],
  favoriteFilms: [],
  countFilmToshow: INITIAL_QUANTITY_FILMS,
  authorizationStatus: AuthorizationStatus.Unknown,
  isFilmsDataLoaded: false,
  error: '',
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.countFilmToshow = INITIAL_QUANTITY_FILMS;
    })
    .addCase(changeCountFilmToShow, (state) => {
      state.countFilmToshow += INITIAL_QUANTITY_FILMS;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isFilmsDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.filmPromo = action.payload;
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
    })
    .addCase(loadMoreLikeFilms, (state, action) => {
      state.moreLikeFilms = action.payload;
    })
    .addCase(loadCurrentFilm, (state, action) => {
      state.currentFilm = action.payload;
    });
});

export {reducer};
