import axios from './axiosInstance';

export const getAllColleges = async () => {
  const res = await axios.get('/colleges');
  return res.data;
};

export const getCollegeById = async (id) => {
  const res = await axios.get(`/colleges/${id}`);
  return res.data;
};

export const addCollege = async (collegeData) => {
  const res = await axios.post('/colleges', collegeData);
  return res.data;
};

export const compareColleges = async (collegeIds) => {
  const res = await axios.post('/colleges/compare', { collegeIds });
  return res.data;
};
