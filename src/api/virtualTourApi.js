import axios from './axiosInstance';

export const getVirtualTourByCollege = async (collegeId) => {
  const res = await axios.get(`/virtual-tour/${collegeId}`);
  return res.data;
};

export const uploadVirtualTour = async (collegeId, formData) => {
  const res = await axios.post(`/virtual-tour/${collegeId}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};
