import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import usersSlice from './users/usersSlice';

const store = configureStore({
  reducer: {
    usersSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
