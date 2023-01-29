import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { dataFilms } from './data-films/data-films';

export const rootReducer = combineReducers({
  [NameSpace.DataFilms]: dataFilms.reducer,
});
