//services/authService.js
import api from './api';

export const login = async (email, password) => {
  try {
    return await api.post('/users/login', { email, password });
  } catch (error) {
    throw new Error(error.message || 'Giriş başarısız');
  }
};

export const register = async (username, email, password) => {
  try {
    return await api.post('/users/register', { username, email, password });
  } catch (error) {
    throw new Error(error.message || 'Kayıt başarısız');
  }
};

export const getUserInfo = async (token) => {
  try {
    // Auth interceptor otomatik olarak token ekleyecek
    return await api.get('/users/me');
  } catch (error) {
    throw new Error(error.message || 'Kullanıcı bilgileri alınamadı');
  }
};