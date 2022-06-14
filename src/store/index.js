import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

import auth from './auth/auth';

const store = configureStore({
   reducer: { auth: auth },
   middleware: [thunk],
});

export default store;
