import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { filmData } from './film-data/film-data';
import { userProcess } from './user-process/user-process';
import {error} from './error-data/error-data';

export const rootReducer = combineReducers({
  [NameSpace.data]: filmData.reducer,
  [NameSpace.user]: userProcess.reducer,
  [NameSpace.error]: error.reducer,
});
