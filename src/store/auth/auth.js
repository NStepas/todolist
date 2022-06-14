import { createSlice } from '@reduxjs/toolkit';
import ActionSetAuthState from '../auth/actions/setAuthState';
import { ThunkLoginUser } from './thunk/thunk';

const initialAuthState = {
   token: '',
   isAuth: false,
};

const auth = createSlice({
   name: 'authentication',
   initialState: initialAuthState,
   reducers: {
      login(state, action) {
         localStorage.setItem('token', initialAuthState.token);
         ActionSetAuthState(state, action.payload);
      },
      logout(state, action) {
         localStorage.removeItem('token');
         ActionSetAuthState(state, action.payload);
      },
   },
   extraReducers: builder => {
      builder.addCase(ThunkLoginUser.fulfilled, (state, action) => {
         ActionSetAuthState(state, action.payload);
      });
   },
});

export const { setAuthState } = auth.actions;

export default auth.reducer;
