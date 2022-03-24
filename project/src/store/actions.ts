import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction<string>('CHANGE_GENRE');
export const changeCountFilmToShow = createAction('CHANGE_COUNT_FILM_TO_SHOW');

