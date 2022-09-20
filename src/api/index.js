import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/';
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers['Content-Type'] = 'multipart/form-data';

export const getUserAsync = createAsyncThunk(
  'usersSlice/getUserAsync',
  async () => {
    const response = await axios.get('users');
    console.log(response.data);
    return response.data;
  }
);

export const getUserById = createAsyncThunk('getUserById', async (id) => {
  const response = await axios.get(`users/${id}`);
  return response.data;
});

export const addNewUserAsync = createAsyncThunk(
  'addNewUserAsync',
  async (data) => {
    // const params = new FormData();
    // params.append('firstName', data.firstName);
    // params.append('lastName', data.lastName);
    // params.append('image', data.image);
    const response = await axios.post('users/add', data);
    console.log(data);
    return response.data;
  }
);
