import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ErrorServerData } from '../../types/state';

const initialState: ErrorServerData = {
  error: '',
};

export const error = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {setError} = error.actions;
