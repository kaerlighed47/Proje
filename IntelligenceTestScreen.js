//screens/IntelligenceTestScreen.js
import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
  Image
} from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import { API_URL } from '../config';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const IntelligenceTestScreen = ({ navigation }) => {
  const { userToken } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(30); // 30 saniye süre
  const [timerActive, setTimerActive] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [savedAnswers, setSavedAnswers] = useState([]);

  // Soruları yükle
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // Daha önce kaydedilmiş cevapları kontrol et
        const savedData = await AsyncStorage.getItem('intelligenceTestProgress');
        if (savedData) {
          const parsedData = JSON.parse(savedData);
          setSavedAnswers(parsedData.answers || []);
          setCurrentQuestionIndex(parsedData.currentIndex || 0);
        }

        const response = await axios.get(`${API_URL}/api/questions/intelligence`, {
          headers: { 'x-auth-token': userToken }
        });
        setQuestions(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Sorular yüklenirken hata:', error);
        Alert.alert('Hata', 'Sorular yüklenirken bir hata oluştu. Lütfen tekrar deneyin.');
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [userToken]);

  // Sayaç işlevi
  useEffect(() => {
    if (questions.length > 0 && !loading && !testCompleted) {
      setTimerActive(true);
    }
  }, [questions, loading, testCompleted]);

  useEffect(() => {
    let timer;
    if (timerActive && timeRemaining > 0) {
      timer = setTimeout(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0 && timerActive) {
      // Süre dolduğunda sonraki soruya geç
      handleNextQuestion(null);
    }

    return () => clearTimeout(timer);
  }, [timerActive, timeRemaining]);

  // Cevap seçildiğinde
  const handleAnswerSelect = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedOption.isCorrect;
    
    const answerObj = {
      questionId: currentQuestion._id,
      selectedOptionId: selectedOption._id,
      isCorrect: isCorrect,
      difficulty: currentQuestion.difficulty
    };
    
    setAnswers(prev => [...prev, answerObj]);
    
    // Sonraki soruya geç
    handleNextQuestion(answerObj);
  };

  // Sonraki soruya geç
  const handleNextQuestion = async (answerObj) => {
    setTimerActive(false);
    
    const newAnswers = answerObj ? [...answers, answerObj] : answers;
    const newIndex = currentQuestionIndex + 1;
    
    // İlerlemeyi kaydet
    await AsyncStorage.setItem('intelligenceTestProgress', JSON.stringify({
      answers: newAnswers,
      currentIndex: newIndex
    }));
    
    if (newIndex < questions.length) {
      setCurrentQuestionIndex(newIndex);
      setTimeRemaining(30); // Süreyi sıfırla
      setTimerActive(true);
    } else {
      // Test tamamlandı
      setTestCompleted(true);
      
      // Kaydedilmiş ilerlemeyi temizle
      await AsyncStorage.removeItem('intelligenceTestProgress');
      
      // Sonuçları kaydet
      saveResults(newAnswers);
    }
  };

  // Sonuçları kaydet
  const saveResults = async (answersArray) => {
    try {
      // Kişilik ve patoloji testlerinin sonuçlarını kontrol et
      const personalityData = await AsyncStorage.getItem('personalityTestResults');
      const pathologyData = await AsyncStorage.getItem('pathologyTestResults');
      
      const personalityAnswers = personalityData ? JSON.parse(personalityData) : [];
      const pathologyAnswers = pathologyData ? JSON.parse(pathologyData) : [];
      
      // Tüm sonuçları sunucuya gönder
      await axios.post(`${API_URL}/api/results`, {
        answers: {
          intelligence: answersArray,
          personality: personalityAnswers,
          pathology: pathologyAnswers
        }
      }, {
        headers: { 'x-auth-token': userToken }
      });
      
      // Diğer testlerin sonuçlarını temizle
      await AsyncStorage.removeItem('personalityTestResults');
      await AsyncStorage.removeItem('pathologyTestResults');
      
      // Sonuçlar ekranına yönlendir
      navigation.navigate('Results');
    } catch (error) {
      console.error('Sonuçlar kaydedilirken hata:', error);
      Alert.alert('Hata', 'Sonuçlar kaydedilirken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  // Testi iptal et
  const cancelTest = () => {
    Alert.alert(
      'Testi İptal Et',
      'Testi iptal etmek istediğinizden emin misiniz? İlerlemeniz kaydedilecektir.',
      [
        { text: 'Hayır', style: 'cancel' },
        { 
          text: 'Evet', 
          onPress: () => navigation.goBack() 
        }
      ]
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6200ee" />
        <Text style={styles.loadingText}>Sorular yükleniyor...</Text>
      </View>
    );
  }

  if (testCompleted) {
    return (
      <View style={styles.completedContainer}>
        <Ionicons name="checkmark-circle" size={80} color="#4CAF50" />
        <Text style={styles.completedTitle}>Test Tamamlandı!</Text>
        <Text style={styles.completedText}>
          Zeka testi başarıyla tamamlandı. Sonuçlarınız analiz ediliyor.
        </Text>
        <TouchableOpacity
          style={styles.completedButton}
          onPress={() => navigation.navigate('Results')}
        >
          <Text style={styles.completedButtonText}>Sonuçları Görüntüle</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.progress}>
          <View 
            style={[
              styles.progressBar, 
              { width: `${((currentQuestionIndex) / questions.length) * 100}%` }
            ]} 
          />
        </View>
        <View style={styles.headerInfo}>
          <Text style={styles.questionCount}>
            Soru {currentQuestionIndex + 1}/{questions.length}
          </Text>
          <View style={styles.timer}>
            <Ionicons name="time-outline" size={18} color={timeRemaining < 10 ? '#FF5252' : '#333'} />
            <Text style={[styles.timerText, timeRemaining < 10 && styles.timerWarning]}>
              {timeRemaining}s
            </Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.questionContainer}>
          <Text style={styles.difficulty}>
            Zorluk: {
              currentQuestion.difficulty === 'easy' ? 'Kolay' : 
              currentQuestion.difficulty === 'medium' ? 'Orta' : 'Zor'
            }
          </Text>
          <Text style={styles.questionText}>{currentQuestion.text}</Text>
          
          {currentQuestion.image && (
            <Image 
              source={{ uri: currentQuestion.image }} 
              style={styles.questionImage} 
              resizeMode="contain"
            />
          )}
          
          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.optionButton}
                onPress={() => handleAnswerSelect(option)}
              >
                <Text style={styles.optionText}>{option.text}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.cancelButton} onPress={cancelTest}>
          <Text style={styles.cancelButtonText}>Testi İptal Et</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  header: {
    backgroundColor: '#fff',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  progress: {
    height: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 3,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 3,
  },
  headerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  questionCount: {
    fontSize: 14,
    color: '#666',
  },
  timer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  timerText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  timerWarning: {
    color: '#FF5252',
  },
  content: {
    flex: 1,
  },
  questionContainer: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  difficulty: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  questionText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
    lineHeight: 26,
  },
  questionImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  optionsContainer: {
    marginTop: 10,
  },
  optionButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  footer: {
    padding: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  cancelButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#666',
  },
  completedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  completedTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  completedText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  completedButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
  },
  completedButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default IntelligenceTestScreen;