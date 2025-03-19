//screens/RegisterScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import axios from 'axios';
import { generateUID } from '../utils/helpers';

const API_URL = 'https://your-backend-api.com/api';

const RegisterScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    gender: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const validateForm = () => {
    const { name, email, password, confirmPassword, age } = formData;

    if (!name || !email || !password || !confirmPassword || !age) {
      Alert.alert('Hata', 'Lütfen tüm zorunlu alanları doldurun.');
      return false;
    }

    if (!email.includes('@')) {
      Alert.alert('Hata', 'Geçerli bir e-posta adresi giriniz.');
      return false;
    }

    if (password.length < 6) {
      Alert.alert('Hata', 'Şifre en az 6 karakter uzunluğunda olmalıdır.');
      return false;
    }

    if (password !== confirmPassword) {
      Alert.alert('Hata', 'Şifreler eşleşmiyor.');
      return false;
    }

    if (isNaN(parseInt(age)) || parseInt(age) < 18) {
      Alert.alert('Hata', 'Yaş 18 veya daha büyük bir sayı olmalıdır.');
      return false;
    }

    return true;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await axios.post(`${API_URL}/auth/register`, {
        userId: generateUID(),
        name: formData.name,
        email: formData.email,
        password: formData.password,
        age: parseInt(formData.age),
        gender: formData.gender || 'not_specified',
        registrationDate: new Date().toISOString(),
      });

      Alert.alert(
        'Kayıt Başarılı',
        'Hesabınız başarıyla oluşturuldu. Şimdi giriş yapabilirsiniz.',
        [{ text: 'Tamam', onPress: () => navigation.navigate('Login') }]
      );
    } catch (error) {
      let errorMessage = 'Kayıt sırasında bir hata oluştu.';

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errorMessage = error.response.data.message;
      }

      Alert.alert('Kayıt Başarısız', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const genders = [
    { id: 'male', label: 'Erkek' },
    { id: 'female', label: 'Kadın' },
    { id: 'other', label: 'Diğer' },
    { id: 'not_specified', label: 'Belirtmek İstemiyorum' },
  ];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Hesap Oluştur</Text>
          <Text style={styles.subtitle}>
            Psikolojik test ve analizlere erişim için kaydolun
          </Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Ad Soyad</Text>
          <TextInput
            style={styles.input}
            placeholder='Adınız ve soyadınız'
            value={formData.name}
            onChangeText={value => handleInputChange('name', value)}
          />

          <Text style={styles.label}>E-posta</Text>
          <TextInput
            style={styles.input}
            placeholder='E-posta adresiniz'
            keyboardType='email-address'
            autoCapitalize='none'
            value={formData.email}
            onChangeText={value => handleInputChange('email', value)}
          />

          <Text style={styles.label}>Şifre</Text>
          <TextInput
            style={styles.input}
            placeholder='En az 6 karakter'
            secureTextEntry
            value={formData.password}
            onChangeText={value => handleInputChange('password', value)}
          />

          <Text style={styles.label}>Şifre Tekrar</Text>
          <TextInput
            style={styles.input}
            placeholder='Şifrenizi tekrar girin'
            secureTextEntry
            value={formData.confirmPassword}
            onChangeText={value => handleInputChange('confirmPassword', value)}
          />

          <Text style={styles.label}>Yaş</Text>
          <TextInput
            style={styles.input}
            placeholder='Yaşınız'
            keyboardType='numeric'
            value={formData.age}
            onChangeText={value => handleInputChange('age', value)}
          />

          <Text style={styles.label}>Cinsiyet</Text>
          <View style={styles.genderContainer}>
            {genders.map(gender => (
              <TouchableOpacity
                key={gender.id}
                style={[
                  styles.genderOption,
                  formData.gender === gender.id && styles.genderOptionSelected,
                ]}
                onPress={() => handleInputChange('gender', gender.id)}
              >
                <Text
                  style={[
                    styles.genderText,
                    formData.gender === gender.id && styles.genderTextSelected,
                  ]}
                >
                  {gender.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleRegister}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color='#fff' />
            ) : (
              <Text style={styles.registerButtonText}>Kaydol</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginLink}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.loginText}>
              Zaten hesabınız var mı?{' '}
              <Text style={styles.loginTextBold}>Giriş Yap</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  formContainer: {
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    marginTop: 15,
  },
  input: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  genderContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  genderOption: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  genderOptionSelected: {
    backgroundColor: '#4285F4',
    borderColor: '#4285F4',
  },
  genderText: {
    color: '#333',
  },
  genderTextSelected: {
    color: '#fff',
  },
  registerButton: {
    backgroundColor: '#4285F4',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    color: '#333',
    fontSize: 16,
  },
  loginTextBold: {
    fontWeight: 'bold',
    color: '#4285F4',
  },
});

export default RegisterScreen;
