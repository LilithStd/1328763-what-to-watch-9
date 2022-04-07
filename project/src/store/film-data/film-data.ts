import { createSlice } from '@reduxjs/toolkit';
import { NameSpace , DEFAULT_GENRE, INITIAL_QUANTITY_FILMS, ReviewSendStatus} from '../../const';
import { FilmData} from '../../types/state';

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
  isFavorite: false,
};

const initialState: FilmData = {
  genre: DEFAULT_GENRE,
  films: [],
  filmPromo: filmPromo,
  currentFilm: filmPromo,
  reviews: [],
  similarFilms: [],
  favoriteFilms: [],
  reviewSendStatus: ReviewSendStatus.INITIAL,
  countFilmToshow: INITIAL_QUANTITY_FILMS,
  isFilmsDataLoaded: false,
  isCurrentFilmDataLoaded: false,
  isPromoFilmDataLoaded: false,
  isReviewsDataLoaded: false,
  isSimilarFilmsDataLoaded: false,
  isFavoriteFilmsDataLoaded: false,
  error: '',
};

export const filmData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadCurrentFilm: (state, action) => {
      state.currentFilm = action.payload;
      state.isCurrentFilmDataLoaded = true;
    },
    loadPromoFilm: (state, action) => {
      state.filmPromo = action.payload;
      state.isPromoFilmDataLoaded = true;
    },
    loadFilms: (state, action) => {
      state.films = action.payload;
      state.isFilmsDataLoaded = true;
    },
    changeCountFilmToShow: (state) => {
      state.countFilmToshow += INITIAL_QUANTITY_FILMS;
    },
    loadSimilarFilms: (state, action) => {
      state.similarFilms = action.payload;
      state.isSimilarFilmsDataLoaded = true;
    },
    loadReviews: (state, action) => {
      state.reviews = action.payload;
      state.isReviewsDataLoaded = true;
    },
    loadFavoriteFilms: (state, action) => {
      state.favoriteFilms = action.payload;
      state.isFavoriteFilmsDataLoaded = true;
    },
    addCurrentFilmToFavorite: (state, action) => {
      state.currentFilm.isFavorite = action.payload;
    },
    addPromoFilmToFavorite: (state, action) => {
      state.filmPromo.isFavorite = action.payload;
    },
    resetFavoriteFilm: (state) => {
      state.favoriteFilms = [];
    },
    sendReviewStatus: (state, action) => {
      state.reviewSendStatus = action.payload;
    },
    changeGenre: (state, action) => {
      state.genre = action.payload;
      state.countFilmToshow = INITIAL_QUANTITY_FILMS;
    },
  },
});

export const { loadCurrentFilm,loadFavoriteFilms,sendReviewStatus, loadPromoFilm, loadFilms, resetFavoriteFilm, loadSimilarFilms, loadReviews,addCurrentFilmToFavorite, changeGenre, changeCountFilmToShow, addPromoFilmToFavorite } = filmData.actions;
