import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, changeCountFilmToShow, loadFilms, requireAuthorization, setError, loadPromoFilm, loadCommentsServer} from '../store/actions';
import {FilmTypes, CommentProps} from '../types/types';
import {DEFAULT_GENRE,INITIAL_QUANTITY_FILMS, AuthorizationStatus} from '../const';


type GenreReducerProps = {
  films : FilmTypes[];
  filmPromo: FilmTypes | null;
  genre: string;
  reviews: CommentProps[];
  filteredFilm : FilmTypes[];
  countFilmToshow: number;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean,
  error: string;
}

const filmPromoServ = {
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


const initialState: GenreReducerProps = {
  genre: DEFAULT_GENRE,
  films: [],
  filmPromo: filmPromoServ,
  reviews: [],
  filteredFilm: [],
  countFilmToshow: INITIAL_QUANTITY_FILMS,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
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
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadCommentsServer, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.filmPromo = action.payload;
    });
});

export {reducer};
