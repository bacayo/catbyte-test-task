import { createSlice } from '@reduxjs/toolkit';

import { getUserAsync, getUserById, addNewUserAsync } from '../../api';

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState: {
    isLoading: false,
    error: null,
    users: [],
    user: [],
  },
  extraReducers: {
    [getUserAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload.users;
    },
    [getUserAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    [getUserById.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [getUserById.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    [addNewUserAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [addNewUserAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users.unshift(action.payload);
    },
    [addNewUserAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default usersSlice.reducer;
