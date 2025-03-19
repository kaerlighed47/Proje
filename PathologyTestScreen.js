// screens/PathologyTestScreen.js
import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import { API_URL } from '../config';
import ProgressBar from '../components/ProgressBar';
import { useNavigation } from '@react-navigation/native';

const PathologyTestScreen = () => {
  const { userToken } = useContext(AuthContext);
  const navigation = useNavigation();
  
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Soruları yükle
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/questions/pathology`, {
          headers: { 'x-auth-token': userToken }
        });
        setQuestions(response.data);
        setAnswers(new Array(response.data.length).fill(null));
        setIsLoading(false);
      } catch (error) {
        console.error('Sorular yüklenirken hata oluştu:', error);
        Alert.alert('Hata', 'Sorular yüklenirken bir hata oluştu. Lütfen tekrar deneyin.');
        navigation.goBack();
      }
    };

    fetchQuestions();
  }, [userToken]);

  // Cevabı kaydet
  const handleAnswer = (optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = {
      questionId: questions[currentQuestionIndex]._id,
      optionIndex,
      weights: questions[currentQuestionIndex].options[optionIndex].weights
    };
    setAnswers(newAnswers);

    // Son soru değilse bir sonraki soruya geç
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Son soru ise testi tamamla
      handleCompleteTest();
    }
  };

  // Bir önceki soruya dön
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Testi tamamla ve sonuçları gönder
  const handleCompleteTest = async () => {
    // Tüm soruların cevaplanıp cevaplanmadığını kontrol et
    if (answers.includes(null)) {
      Alert.alert(
        'Eksik Cevaplar',
        'Lütfen tüm soruları cevaplayın.',
        [{ text: 'Tamam' }]
      );
      return;
    }

    setIsSubmitting(true);

    try {
      // Testi tamamla - Bu kısmı kendi test sonuçları backendine göre uyarlayabilirsiniz
      // Gerçek uygulamada tüm test (intelligence, personality, pathology) sonuçlarını birlikte göndereceksiniz
      // Burada sadece pathology test sonuçlarını gönderiyoruz örnek olarak
      const response = await axios.post(
        `${API_URL}/api/results`,
        {
          answers: {
            pathology: answers
          }
        },
        {
          headers: { 'x-auth-token': userToken }
        }
      );

      // Başarılı ise sonuç sayfasına yönlendir
      navigation.navigate('Results');
    } catch (error) {
      console.error('Test sonuçları gönderilirken hata oluştu:', error);
      Alert.alert(
        'Hata',
        'Test sonuçları gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6200ee" />
        <Text style={styles.loadingText}>Sorular yükleniyor...</Text>
      </View>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex / questions.length) * 100;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressContainer}>
        <ProgressBar progress={progress} />
        <Text style={styles.progressText}>
          {currentQuestionIndex + 1} / {questions.length}
        </Text>
      </View>

      <ScrollView style={styles.questionContainer}>
        <Text style={styles.questionText}>{currentQuestion.text}</Text>

        <View style={styles.optionsContainer}>
          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                answers[currentQuestionIndex]?.optionIndex === index && styles.selectedOption
              ]}
              onPress={() => handleAnswer(index)}
            >
              <Text style={[
                styles.optionText,
                answers[currentQuestionIndex]?.optionIndex === index && styles.selectedOptionText
              ]}>
                {option.text}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={[styles.navButton, currentQuestionIndex === 0 && styles.disabledButton]}
          onPress={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          <Text style={styles.navButtonText}>Önceki</Text>
        </TouchableOpacity>

        {currentQuestionIndex === questions.length - 1 ? (
          <TouchableOpacity
            style={[styles.navButton, styles.completeButton, isSubmitting && styles.disabledButton]}
            onPress={handleCompleteTest}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.navButtonText}>Tamamla</Text>
            )}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.navButton, !answers[currentQuestionIndex] && styles.disabledButton]}
            onPress={() => {
              if (answers[currentQuestionIndex]) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
              } else {
                Alert.alert('Uyarı', 'Lütfen bir seçenek seçin.');
              }
            }}
            disabled={!answers[currentQuestionIndex]}
          >
            <Text style={styles.navButtonText}>Sonraki</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
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
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  progressContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  progressText: {
    textAlign: 'center',
    marginTop: 5,
    color: '#666',
  },
  questionContainer: {
    flex: 1,
    padding: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    marginBottom: 20,
  },
  optionsContainer: {
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedOption: {
    backgroundColor: '#6200ee',
    borderColor: '#6200ee',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  selectedOptionText: {
    color: '#fff',
  },
  navigationContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navButton: {
    flex: 1,
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  navButtonText: {
    color: '#fff',
    fontWeight: '500',
  },
  disabledButton: {
    backgroundColor: '#c2c2c2',
  },
  completeButton: {
    backgroundColor: '#4caf50',
  },
});

export default PathologyTestScreen;