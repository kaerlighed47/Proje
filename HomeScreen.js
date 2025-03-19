//screens/HomeScreen.js
import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Image
} from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import { useQuery } from 'react-query';
import axios from 'axios';
import { API_URL } from '../config';

const HomeScreen = ({ navigation }) => {
  const { userData, userToken, logout } = useContext(AuthContext);

  // Kullanıcının test sonuçlarını getir
  const { data: results, isLoading, error } = useQuery('userResults', async () => {
    const response = await axios.get(`${API_URL}/api/results/user`, {
      headers: { 'x-auth-token': userToken }
    });
    return response.data;
  });

  const startNewTest = () => {
    navigation.navigate('TestSelection');
  };

  const viewResults = () => {
    navigation.navigate('Results');
  };

  const viewProfile = () => {
    navigation.navigate('Profile');
  };

  const handleLogout = () => {
    logout();
  };

  const lastResult = results && results.length > 0 ? results[0] : null;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Merhaba, {userData?.username || 'Kullanıcı'}</Text>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={24} color="#6200ee" />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Kişisel Gelişim Yolculuğun</Text>
        <Text style={styles.cardText}>
          Zihin ve kişilik testlerimiz ile kendinizi keşfedin ve potansiyelinizi açığa çıkarın.
        </Text>
        <TouchableOpacity style={styles.startButton} onPress={startNewTest}>
          <Text style={styles.startButtonText}>Yeni Test Başlat</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsContainer}>
        <Text style={styles.sectionTitle}>İstatistikleriniz</Text>
        
        {isLoading ? (
          <ActivityIndicator size="large" color="#6200ee" />
        ) : error ? (
          <Text style={styles.errorText}>Sonuçlar yüklenirken bir hata oluştu</Text>
        ) : results && results.length > 0 ? (
          <View style={styles.statsContent}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Toplam Test</Text>
              <Text style={styles.statValue}>{results.length}</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Son IQ</Text>
              <Text style={styles.statValue}>{lastResult?.iq || 'N/A'}</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Son Test</Text>
              <Text style={styles.statValue}>
                {lastResult ? new Date(lastResult.testDate).toLocaleDateString() : 'N/A'}
              </Text>
            </View>
          </View>
        ) : (
          <Text style={styles.noResultsText}>Henüz hiç test tamamlamadınız</Text>
        )}
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton} onPress={viewResults}>
          <Ionicons name="stats-chart" size={24} color="#6200ee" />
          <Text style={styles.actionButtonText}>Sonuçlarım</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={viewProfile}>
          <Ionicons name="person" size={24} color="#6200ee" />
          <Text style={styles.actionButtonText}>Profilim</Text>
        </TouchableOpacity>
      </View>

      {lastResult && (
        <View style={styles.lastResultContainer}>
          <Text style={styles.sectionTitle}>Son Test Sonucunuz</Text>
          <TouchableOpacity 
            style={styles.lastResultCard}
            onPress={() => navigation.navigate('ResultDetail', { resultId: lastResult._id })}
          >
            <View style={styles.resultHeader}>
              <Text style={styles.resultDate}>
                {new Date(lastResult.testDate).toLocaleDateString()}
              </Text>
              <Text style={styles.resultIQ}>IQ: {lastResult.iq}</Text>
            </View>
            <View style={styles.resultPreview}>
              <Text style={styles.resultPreviewText} numberOfLines={3}>
                {lastResult.aiAnalysis.substring(0, 120)}...
              </Text>
            </View>
            <Text style={styles.viewMoreText}>Detayları Görüntüle</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  logoutButton: {
    padding: 8,
  },
  card: {
    backgroundColor: '#6200ee',
    borderRadius: 10,
    padding: 20,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: '#f0f0f0',
    marginBottom: 15,
  },
  startButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 12,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#6200ee',
    fontWeight: 'bold',
  },
  statsContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  statsContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6200ee',
  },
  noResultsText: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 10,
  },
  errorText: {
    fontSize: 14,
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginBottom: 15,
  },
  actionButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    flex: 0.48,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionButtonText: {
    color: '#6200ee',
    fontWeight: 'bold',
    marginTop: 5,
  },
  lastResultContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 15,
    marginTop: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  lastResultCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#6200ee',
  },
  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  resultDate: {
    fontSize: 12,
    color: '#666',
  },
  resultIQ: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6200ee',
  },
  resultPreview: {
    marginBottom: 10,
  },
  resultPreviewText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  viewMoreText: {
    fontSize: 12,
    color: '#6200ee',
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default HomeScreen;