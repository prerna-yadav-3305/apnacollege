import axios from './axiosInstance';

export const getReviewsByCollege = async (collegeId) => {
  const res = await axios.get(`/reviews/college/${collegeId}`);
  return res.data;
};

export const addReview = async (collegeId, reviewData) => {
  const res = await axios.post(`/reviews/${collegeId}`, reviewData);
  return res.data;
};
