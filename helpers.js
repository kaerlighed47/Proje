// utils/helpers.js
import { Platform, Dimensions } from 'react-native';
import axios from 'axios';

// DEEPSEEK API yapılandırması
const DEEPSEEK_API_BASE_URL = 'https://api.deepseek.com/v1';
let DEEPSEEK_API_KEY = '';

// API anahtarını ayarlama fonksiyonu
export const setDeepseekApiKey = (apiKey) => {
  DEEPSEEK_API_KEY = apiKey;
};

// DEEPSEEK API istek fonksiyonu
export const callDeepseekAPI = async (endpoint, data) => {
  if (!DEEPSEEK_API_KEY) {
    throw new Error('DEEPSEEK API anahtarı ayarlanmamış');
  }
  
  try {
    const response = await axios({
      method: 'POST',
      url: ${DEEPSEEK_API_BASE_URL}/${endpoint},
      headers: {
        'Content-Type': 'application/json',
        'Authorization': Bearer ${DEEPSEEK_API_KEY}
      },
      data: data
    });
    
    return response.data;
  } catch (error) {
    throw getErrorMessage(error);
  }
};

// Kişilik analizi için DEEPSEEK API'yi kullan
export const analyzePersonality = async (responses) => {
  try {
    const result = await callDeepseekAPI('personality/analyze', { responses });
    // API'den gelen yorumları doğrudan kullan
    return result;
  } catch (error) {
    console.error('Kişilik analizi hatası:', error);
    throw error;
  }
};

// Patolojik durumlar için risk analizi
export const analyzeRisks = async (responses) => {
  try {
    const result = await callDeepseekAPI('psychology/risks', { responses });
    // API'den gelen risk değerlendirmelerini doğrudan kullan
    return result;
  } catch (error) {
    console.error('Risk analizi hatası:', error);
    throw error;
  }
};

// IQ testi sonucunu analiz et
export const analyzeIQ = async (answers) => {
  try {
    const result = await callDeepseekAPI('cognition/iq', { answers });
    // DEEPSEEK'in IQ yorumunu doğrudan kullan
    return result;
  } catch (error) {
    console.error('IQ analizi hatası:', error);
    throw error;
  }
};

// Metin analizi için DEEPSEEK API kullanımı
export const analyzeText = async (text) => {
  try {
    const result = await callDeepseekAPI('text/analyze', { text });
    return result;
  } catch (error) {
    console.error('Metin analizi hatası:', error);
    throw error;
  }
};

// Duygu analizi için DEEPSEEK API kullanımı
export const analyzeSentiment = async (text) => {
  try {
    const result = await callDeepseekAPI('sentiment/analyze', { text });
    return result;
  } catch (error) {
    console.error('Duygu analizi hatası:', error);
    throw error;
  }
};

// Ekran boyutlarını al
export const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Tarih formatı
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  
  return ${day}.${month}.${year} ${hours}:${minutes};
};

// JSON'u formatlı tarih ile döndür
export const formatDateInJSON = (json) => {
  const data = JSON.parse(json);
  if (data.testDate) {
    data.testDate = formatDate(data.testDate);
  }
  return data;
};

// Hata mesajlarını özelleştir
export const getErrorMessage = (error) => {
  if (!error) return 'Bir hata oluştu.';
  
  if (error.response) {
    // Sunucu cevabı
    if (error.response.data && error.response.data.message) {
      return error.response.data.message;
    }
    return Sunucu hatası: ${error.response.status};
  } else if (error.request) {
    // İstek yapıldı ancak cevap alınamadı
    return 'Sunucuya ulaşılamıyor. Lütfen internet bağlantınızı kontrol edin.';
  } else {
    // İstek yapılamadı
    return error.message || 'Bilinmeyen bir hata oluştu.';
  }
};

// Zaman ölçümü
export const timeAgo = (dateString) => {
  const now = new Date();
  const diffInSeconds = Math.floor((now - new Date(dateString)) / 1000);
  
  if (diffInSeconds < 60) return ${diffInSeconds} saniye önce;
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return ${diffInMinutes} dakika önce;
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return ${diffInHours} saat önce;
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) return ${diffInDays} gün önce;
  
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) return ${diffInMonths} ay önce;
  
  const diffInYears = Math.floor(diffInMonths / 12);
  return ${diffInYears} yıl önce;
};

// Yardımcı fonksiyonlar
export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Sanal klavye için yardımcı fonksiyonlar
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

// Rastgele bir kimlik oluştur
export const generateUID = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Bir sayı aralığını belirli bir değerle sınırla
export const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

// Bir sayıyı belirli bir aralığa ölçeklendir
export const scale = (num, inMin, inMax, outMin, outMax) => {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

// Güvenlik için API anahtarı maskeleme
export const maskApiKey = (apiKey) => {
  if (!apiKey || apiKey.length < 8) return '**';
  return apiKey.substring(0, 4) + '...' + apiKey.substring(apiKey.length - 4);
};

// Tema değişikliği tespit etme
export const isDarkMode = (theme) => {
  return theme === 'dark';
};

// Sayfa geçişi animasyonu
export const pageTransition = {
  slideInRight: {
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  },
};