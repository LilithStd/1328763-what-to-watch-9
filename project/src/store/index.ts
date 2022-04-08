import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reduser';
import {createAPI} from '../services/api';
import {redirect} from '../store/middlewares/redirect';

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
