import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, changeCountFilmToShow} from '../store/actions';
import {FilmTypes, CommentProps} from '../types/types';
import {filmMock} from '../mock/films';
import {commentMock} from '../mock/reviews';
import {DEFAULT_GENRE,INITIAL_QUANTITY_FILMS} from '../const';


interface GenreReducerProps {
  films : FilmTypes[];
  filmPromo: FilmTypes
  genre: string;
  reviews: CommentProps[];
  filteredFilm : FilmTypes[];
  countFilmToshow: number;
}

const initialState: GenreReducerProps = {
  genre: DEFAULT_GENRE,
  films: filmMock,
  filmPromo: filmMock[0],
  reviews: commentMock,
  filteredFilm: filmMock,
  countFilmToshow: INITIAL_QUANTITY_FILMS,
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.filteredFilm = action.payload === DEFAULT_GENRE ? state.films : state.films.filter((item) => item.genre === action.payload);
      state.countFilmToshow = INITIAL_QUANTITY_FILMS;
    })
    .addCase(changeCountFilmToShow, (state) => {
      state.countFilmToshow += INITIAL_QUANTITY_FILMS;
    });
});

export {reducer};
