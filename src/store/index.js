import { configureStore } from '@reduxjs/toolkit';

import auth from './auth/auth';
import thunk from 'redux-thunk';

const store = configureStore({
   reducer: { auth: auth },
   middleware: [thunk],
});

export default store;
