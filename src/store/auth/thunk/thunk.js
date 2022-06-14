import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../service/index';

export const ThunkLoginUser = createAsyncThunk('auth/login', async payload => {
   const users = await api.auth.login(payload);
   if (users.length) {
      return true;
   }
   return false;
});
