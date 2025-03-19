//services/testService.js
import api from './api';

export const getQuestionsByCategory = async (category) => {
  try {
    return await api.get(`/questions/${category}`);
  } catch (error) {
    throw new Error(error.message || 'Sorular alınamadı');
  }
};

export const saveResults = async (data) => {
  try {
    return await api.post('/results', data);
  } catch (error) {
    throw new Error(error.message || 'Sonuçlar kaydedilemedi');
  }
};

export const getUserResults = async () => {
  try {
    return await api.get('/results/user');
  } catch (error) {
    throw new Error(error.message || 'Sonuçlar alınamadı');
  }
};

export const getResultDetails = async (resultId) => {
  try {
    return await api.get(`/results/${resultId}`);
  } catch (error) {
    throw new Error(error.message || 'Sonuç detayları alınamadı');
  }
};