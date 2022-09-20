import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/';
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers['Content-Type'] = 'application/json';

export const getUserAsync = createAsyncThunk(
  'usersSlice/getUserAsync',
  async () => {
    const response = await axios.get('users');
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
    const response = await axios.post('users/add', data);
    return response.data;
  }
);
// fetch('https://dummyjson.com/users/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     firstName: 'Muhammad',
//     lastName: 'Ovi',
//     age: 250,
//     /* other user data */
//   })
// })
// .then(res => res.json())
// .then(console.log);

// axios
//   .post('/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone',
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
