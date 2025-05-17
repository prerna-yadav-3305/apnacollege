import axios from './axiosInstance';

export const submitCounsellingForm = async (formData) => {
  const res = await axios.post('/counselling', formData);
  return res.data;
};

export const getCounsellingResult = async (userId) => {
  const res = await axios.get(`/counselling/result/${userId}`);
  return res.data;
};
