import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus } from '../../const';
import { UserData } from '../../types/auth-data';
import { checkAuthAction } from '../api-actions';

export type UserProcess = {
  authorizationStatus: string;
  userData?: UserData;
};

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        if (action.payload) {
          state.authorizationStatus = AuthorizationStatus.Auth;
          state.userData = action.payload;
        } else {state.authorizationStatus = AuthorizationStatus.NoAuth;}
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
