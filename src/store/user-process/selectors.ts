import { createSelector } from 'reselect';
import {AuthorizationStatus, NameSpace} from '../../const';
import { AuthData } from '../../types/auth-data';
import {State} from '../../types/state';

export const getAuthorizationStatus = (state: State): string => state[NameSpace.User].authorizationStatus;
export const getUserData = (state: State): AuthData| undefined => state[NameSpace.User].userData;

export const getIsUserAuth = createSelector(
  [getAuthorizationStatus],
  (authorizationStatus: string) => authorizationStatus === AuthorizationStatus.Auth
);
