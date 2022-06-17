import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
import ActionSetAuthState from '../auth/actions/setAuthState';
import { ThunkGetUserTasks, ThunkLoginUser, ThunkSignUpUser } from './thunk/thunk';

const initialAuthState = {
   token: '',
   isAuth: false,
};

const auth = createSlice({
   name: 'auth',
   initialState: initialAuthState,
   reducers: {
      setAuthState: (state, action) => {
         ActionSetAuthState(state, action.payload);
      },
      logout(state, action) {
         localStorage.removeItem('token');
         ActionSetAuthState(state, action.payload);
      },
   },
   extraReducers: builder => {
      builder
         .addCase(ThunkLoginUser.fulfilled, (state, action) => {
            console.log(state, action);
            ActionSetAuthState(state, action.payload);
         })
         .addCase(ThunkSignUpUser.fulfilled, (state, action) => {
            ActionSetAuthState(state, action.payload);
         })
         .addCase(ThunkGetUserTasks.fulfilled, (state, action) => {});
   },
});

export const { setAuthState } = auth.actions;

export default auth.reducer;
