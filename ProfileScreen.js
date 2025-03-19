//screens/ProfileScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
  Switch,
  RefreshControl,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { formatDate, maskApiKey, timeAgo } from '../utils/helpers';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const API_URL = 'https://your-backend-api.com/api';

const ProfileScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [testHistory, setTestHistory] = useState([]);
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  useEffect(() => {
    loadUserData();
    loadTestHistory();
  }, []);

  const loadUserData = async () => {
    try {
      const userDataString = await AsyncStorage.getItem('user_data');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        setUserData(userData);
      }

      const deepseekApiKey = await AsyncStorage.getItem('deepseek_api_key');
      if (deepseekApiKey) {
        setApiKey(deepseekApiKey);
      }

      const darkModeValue = await AsyncStorage.getItem('dark_mode');
      setDarkMode(darkModeValue === 'true');

      const notifValue = await AsyncStorage.getItem('notifications_enabled');
      setNotificationsEnabled(notifValue !== 'false');
    } catch (error) {
      console.error('Kullanıcı verileri yüklenirken hata:', error);
    }
  };

  const loadTestHistory = async () => {
    setIsLoading(true);
    try {
      const token = await AsyncStorage.getItem('auth_token');
      if (!token) {
        navigation.navigate('Login');
        return;
      }

      const response = await axios.get(`${API_URL}/user/tests`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTestHistory(response.data.tests || []);
    } catch (error) {
      console.error('Test geçmişi yüklenirken hata:', error);
      Alert.alert('Hata', 'Test geçmişi yüklenirken bir sorun oluştu.');
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  };

  const handleLogout = async () => {
    Alert.alert(
      'Çıkış Yap',
      'Hesabınızdan çıkış yapmak istediğinize emin misiniz?',
      [
        { text: 'İptal', style: 'cancel' },
        {
          text: 'Çıkış Yap',
          style: 'destructive',
          onPress: async () => {
            try {
              await AsyncStorage.removeItem('auth_token');
              await AsyncStorage.removeItem('user_data');
              // API anahtarını saklamak isteyebilirsiniz, bu yüzden onu silmiyoruz

              navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
              });
            } catch (error) {
              console.error('Çıkış yapılırken hata:', error);
              Alert.alert('Hata', 'Çıkış yapılırken bir sorun oluştu.');
            }
          },
        },
      ]
    );
  };

  const handleRefresh = () => {
    setRefreshing(true);
    loadUserData();
    loadTestHistory();
  };

  const toggleDarkMode = async value => {
    setDarkMode(value);
    await AsyncStorage.setItem('dark_mode', value ? 'true' : 'false');
    // Tema değişikliğini uygulamak için gerekli işlemleri yapın
  };

  const toggleNotifications = async value => {
    setNotificationsEnabled(value);
    await AsyncStorage.setItem(
      'notifications_enabled',
      value ? 'true' : 'false'
    );
  };

  const viewTestResult = testId => {
    navigation.navigate('Result', { testId });
  };

  if (!userData && isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='#4285F4' />
        <Text style={styles.loadingText}>Bilgiler yükleniyor...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    >
      <View style={styles.profileHeader}>
        <View style={styles.profileImageContainer}>
          {userData?.profileImage ? (
            <Image
              source={{ uri: userData.profileImage }}
              style={styles.profileImage}
            />
          ) : (
            <View style={styles.profileImagePlaceholder}>
              <Text style={styles.profileInitials}>
                {userData?.name ? userData.name.charAt(0).toUpperCase() : '?'}
              </Text>
            </View>
          )}
        </View>

        <Text style={styles.profileName}>{userData?.name || 'Kullanıcı'}</Text>
        <Text style={styles.profileEmail}>
          {userData?.email || 'E-posta yok'}
        </Text>

        <View style={styles.profileStats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{testHistory.length}</Text>
            <Text style={styles.statLabel}>Test</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>
              {userData?.testResults?.length || 0}
            </Text>
            <Text style={styles.statLabel}>Sonuç</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>
              {userData?.memberSince ? timeAgo(userData.memberSince) : 'Yeni'}
            </Text>
            <Text style={styles.statLabel}>Üyelik</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>DEEPSEEK API</Text>
        <View style={styles.apiKeyContainer}>
          <Text style={styles.apiKeyLabel}>API Anahtarı:</Text>
          <Text style={styles.apiKeyValue}>
            {apiKey ? maskApiKey(apiKey) : 'Ayarlanmamış'}
          </Text>
          <TouchableOpacity style={styles.apiKeyButton}>
            <Text style={styles.apiKeyButtonText}>Değiştir</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Test Geçmişi</Text>
        {isLoading ? (
          <ActivityIndicator
            style={styles.loadingTests}
            size='small'
            color='#4285F4'
          />
        ) : testHistory.length > 0 ? (
          testHistory.map(test => (
            <TouchableOpacity
              key={test.id}
              style={styles.testItem}
              onPress={() => viewTestResult(test.id)}
            >
              <View style={styles.testIconContainer}>
                <Icon name='brain' size={24} color='#4285F4' />
              </View>
              <View style={styles.testInfo}>
                <Text style={styles.testTitle}>{test.title}</Text>
                <Text style={styles.testDate}>{formatDate(test.testDate)}</Text>
              </View>
              <Icon name='chevron-right' size={24} color='#999' />
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noTestsText}>
            Henüz test geçmişiniz bulunmuyor.
          </Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ayarlar</Text>

        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Karanlık Mod</Text>
          <Switch
            value={darkMode}
            onValueChange={toggleDarkMode}
            trackColor={{ false: '#ddd', true: '#4285F4' }}
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Bildirimler</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={toggleNotifications}
            trackColor={{ false: '#ddd', true: '#4285F4' }}
          />
        </View>

        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.settingButtonText}>
            Hesap Bilgilerini Güncelle
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.settingButtonText}>Şifre Değiştir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.settingButtonText}>Gizlilik Politikası</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.settingButton, styles.logoutButton]}
          onPress={handleLogout}
        >
          <Text style={styles.logoutButtonText}>Çıkış Yap</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  profileHeader: {
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profileImageContainer: {
    marginBottom: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileImagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#4285F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitials: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  profileStats: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  apiKeyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  apiKeyLabel: {
    fontSize: 16,
    color: '#333',
  },
  apiKeyValue: {
    fontSize: 16,
    color: '#666',
    flex: 1,
    marginLeft: 10,
  },
  apiKeyButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  apiKeyButtonText: {
    color: '#4285F4',
    fontWeight: 'bold',
  },
  loadingTests: {
    marginVertical: 20,
  },
  testItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  testIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f7ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  testInfo: {
    flex: 1,
  },
  testTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  testDate: {
    fontSize: 14,
    color: '#888',
    marginTop: 3,
  },
  noTestsText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginVertical: 15,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingLabel: {
    fontSize: 16,
    color: '#333',
  },
  settingButton: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingButtonText: {
    fontSize: 16,
    color: '#4285F4',
  },
  logoutButton: {
    marginTop: 10,
    borderBottomWidth: 0,
  },
  logoutButtonText: {
    fontSize: 16,
    color: '#FF3B30',
    fontWeight: '500',
  },
});
export default ProfileScreen;
