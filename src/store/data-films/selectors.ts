
import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Films } from '../../types/film';

export const getFilms = (state: State): Films | [] => state[NameSpace.DataFilms].films;
export const getFilmsFetchStatus = (state: State): string => state[NameSpace.DataFilms].filmsFetchStatus;
