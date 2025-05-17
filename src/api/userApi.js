import axios from './axiosInstance';

export const registerUser = async (userData) => {
  const res = await axios.post('/users/register', userData);
  return res.data;
};

export const loginUser = async (credentials) => {
  const res = await axios.post('/users/login', credentials);
  return res.data;
};

export const logoutUser = async () => {
  const res = await axios.post('/users/logout');
  return res.data;
};

export const getUserProfile = async () => {
  const res = await axios.get('/users/profile');
  return res.data;
};
