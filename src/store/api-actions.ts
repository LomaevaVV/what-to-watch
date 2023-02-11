import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../const';
import { AppDispatch, State } from '../types/state';
import { toast } from 'react-toastify';
import { Films } from '../types/film';
import { AuthData, UserData } from '../types/auth-data';
import { redirectToRoute } from './action';
import { dropToken, saveToken } from '../services/token';

export const fetchFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get<Films>(APIRoute.Films);

      return data;
    } catch(e) {
      toast.error('Films loading error', {
        position: toast.POSITION.TOP_CENTER,
      });

      throw e;
    }
  });

export const checkAuthAction = createAsyncThunk<UserData | undefined, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/checkAuth',
    async (_arg, {extra: api}) => {
      try {
        const {data: authData} = await api.get<UserData | undefined>(APIRoute.Login);

        return authData;
      } catch(e) {

        toast.warn('You are not authorized or Unable to check authorization status', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    },
  );

export const loginAction = createAsyncThunk<string, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/login',
    async ({email, password}, {dispatch, extra: api}) => {
      try {
        const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
        saveToken(token);
        dispatch(redirectToRoute(AppRoute.Main));

        return email;
      } catch(e) {
        toast.error('Unable to login', {
          position: toast.POSITION.TOP_CENTER,
        });

        throw e;
      }
    },
  );

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/logout',
    async (_arg, {extra: api}) => {
      try {
        await api.delete(APIRoute.Logout);
        dropToken();
      } catch {
        toast.error('Unable to logout', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    },
  );
