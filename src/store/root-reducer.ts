import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { dataFilms } from './data-films/data-films';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.DataFilms]: dataFilms.reducer,
  [NameSpace.User]: userProcess.reducer,
});
