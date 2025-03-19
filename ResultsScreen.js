// screens/ResultsScreen.js
import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Alert
} from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import { useQuery } from 'react-query';
import axios from 'axios';
import { API_URL } from '../config';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ResultsScreen = () => {
  const { userToken } = useContext(AuthContext);
  const navigation = useNavigation();

  // Kullanıcının test sonuçlarını getir
  const { data: results, isLoading, error, refetch } = useQuery('userResults', async () => {
    const response = await axios.get(`${API_URL}/api/results/user`, {
      headers: { 'x-auth-token': userToken }
    });
    return response.data;
  });

  const handleViewResult = (resultId) => {
    navigation.navigate('ResultDetail', { resultId });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6200ee" />
        <Text style={styles.loadingText}>Sonuçlar yükleniyor...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Ionicons name="alert-circle-outline" size={48} color="#f44336" />
        <Text style={styles.errorText}>Sonuçlar yüklenirken bir hata oluştu.</Text>
        <TouchableOpacity style={styles.retryButton} onPress={() => refetch()}>
          <Text style={styles.retryButtonText}>Tekrar Dene</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!results || results.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons name="document-text-outline" size={64} color="#6200ee" />
        <Text style={styles.emptyText}>Henüz hiç test sonucunuz yok.</Text>
        <TouchableOpacity
          style={styles.newTestButton}
          onPress={() => navigation.navigate('TestSelection')}
        >
          <Text style={styles.newTestButtonText}>Yeni Test Başlat</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Test Sonuçlarınız</Text>
      
      <FlatList
        data={results}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.resultCard}
            onPress={() => handleViewResult(item._id)}
          >
            <View style={styles.resultHeader}>
              <Text style={styles.resultDate}>{formatDate(item.testDate)}</Text>
            </View>
            
            <View style={styles.resultInfo}>
              {item.iq > 0 && (
                <View style={styles.resultItem}>
                  <Text style={styles.resultLabel}>IQ:</Text>
                  <Text style={styles.resultValue}>{item.iq}</Text>
                </View>
              )}
              
              <View style={styles.resultItem}>
                <Text style={styles.resultLabel}>Kişilik:</Text>
                <View style={styles.traitsList}>
                  {item.personality && Object.keys(item.personality).map((trait) => (
                    <View key={trait} style={styles.traitItem}>
                      <Text style={styles.traitName}>
                        {trait === 'extraversion' ? 'Dışadönüklük' :
                         trait === 'agreeableness' ? 'Uyumluluk' :
                         trait === 'conscientiousness' ? 'Sorumluluk' :
                         trait === 'neuroticism' ? 'Duygusal Denge' :
                         trait === 'openness' ? 'Deneyime Açıklık' : trait}
                      </Text>
                      <View style={styles.traitBarContainer}>
                        <View 
                          style={[
                            styles.traitBar, 
                            { width: `${item.personality[trait]}%` }
                          ]} 
                        />
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            </View>
            
            <View style={styles.viewDetails}>
              <Text style={styles.viewDetailsText}>Detayları Görüntüle</Text>
              <Ionicons name="chevron-forward" size={16} color="#6200ee" />
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
      />
      
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('TestSelection')}
      >
        <Ionicons name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
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
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginVertical: 15,
  },
  retryButton: {
    backgroundColor: '#6200ee',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  retryButtonText: {
    color: '#fff',
    fontWeight: '500',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginVertical: 15,
  },
  newTestButton: {
    backgroundColor: '#6200ee',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 15,
  },
  newTestButtonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
  listContent: {
    paddingBottom: 80,
  },
  resultCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  resultHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 10,
    marginBottom: 10,
  },
  resultDate: {
    fontSize: 14,
    color: '#666',
  },
  resultInfo: {
    marginBottom: 10,
  },
  resultItem: {
    marginBottom: 10,
  },
  resultLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 5,
  },
  resultValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200ee',
  },
  traitsList: {},
  traitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  traitName: {
    flex: 1,
    fontSize: 14,
    color: '#555',
  },
  traitBarContainer: {
    flex: 2,
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  traitBar: {
    height: '100%',
    backgroundColor: '#6200ee',
  },
  viewDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 10,
  },
  viewDetailsText: {
    color: '#6200ee',
    fontSize: 14,
    fontWeight: '500',
    marginRight: 5,
  },
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default ResultsScreen;