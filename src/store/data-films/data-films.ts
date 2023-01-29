import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, FetchStatus } from '../../const';
import { Films } from '../../types/film';
import { fetchFilmsAction} from '../api-actions';

type DataFilms = {
  films: Films | [];
  filmsFetchStatus: string;
};

const initialState: DataFilms = {
  films: [],
  filmsFetchStatus: FetchStatus.Idle,
};

export const dataFilms = createSlice({
  name: NameSpace.DataFilms,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.filmsFetchStatus = FetchStatus.Loading;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.filmsFetchStatus = FetchStatus.Success;
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.films = [];
        state.filmsFetchStatus = FetchStatus.Rejected;
      });
  }
});
