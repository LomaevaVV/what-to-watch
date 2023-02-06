import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { AppDispatch, State } from '../types/state';
import { toast } from 'react-toastify';
import { Films } from '../types/film';
import { AuthData } from '../types/auth-data';

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

export const checkAuthAction = createAsyncThunk<AuthData | undefined, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/checkAuth',
    async (_arg, {extra: api}) => {
      try {
        const {data: authData} = await api.get<AuthData | undefined>(APIRoute.Login);

        return authData;
      } catch(e) {

        toast.warn('You are not authorized or Unable to check authorization status', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    },
  );
