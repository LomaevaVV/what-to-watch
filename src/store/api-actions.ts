import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { AppDispatch, State } from '../types/state';
import { toast } from 'react-toastify';
import { Films } from '../types/film';

export const fetchFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get<Films>(APIRoute.Films);

      return data;
    } catch(e) {
      toast.error('Offers loading error', {
        position: toast.POSITION.TOP_CENTER,
      });

      throw e;
    }
  });
