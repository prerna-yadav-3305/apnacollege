import axios from './axiosInstance';

export const exploreColleges = async (filters) => {
  const res = await axios.get('/explore', {
    params: filters, // { state: 'Delhi', stream: 'Engineering' }
  });
  return res.data;
};
