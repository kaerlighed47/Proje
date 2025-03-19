//services/api.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// API URL'si
const API_URL = 'http://localhost:5000/api';

// Axios instance oluştur
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - Auth token ekle
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Hataları işle
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = 
      error.response?.data?.message || 
      error.message || 
      'Bir şeyler yanlış gitti';
    return Promise.reject(new Error(message));
  }
);

// API Fonksiyonları

// Kullanıcı ile ilgili
export const fetchUserProfile = async () => {
  return await api.get('/users/me');
};

// Sorular ile ilgili
export const fetchQuestions = async (category) => {
  return await api.get(`/questions/${category}`);
};

// Sonuçlar ile ilgili
export const fetchUserResults = async () => {
  return await api.get('/results/user');
};

export const fetchResultDetails = async (resultId) => {
  return await api.get(`/results/${resultId}`);
};

export const postTestResults = async (answers) => {
  return await api.post('/results', { answers });
};

export default api;