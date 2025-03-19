//screens/TestSelectionScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TestSelectionScreen = ({ navigation }) => {
  const tests = [
    {
      id: 1,
      title: 'Zeka Testi (IQ)',
      description: 'Bilişsel yeteneklerinizi ölçün ve zeka seviyenizi belirleyin.',
      icon: 'brain',
      screen: 'IntelligenceTest',
      color: '#4CAF50'
    },
    {
      id: 2,
      title: 'Kişilik Analizi',
      description: 'Karakter özelliklerinizi ve davranış eğilimlerinizi keşfedin.',
      icon: 'person',
      screen: 'PersonalityTest',
      color: '#2196F3'
    },
    {
      id: 3,
      title: 'Psikolojik Durum Değerlendirmesi',
      description: 'Zihinsel sağlığınızı ve psikolojik durumunuzu analiz edin.',
      icon: 'pulse',
      screen: 'PathologyTest',
      color: '#9C27B0'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Test Seçimi</Text>
        <Text style={styles.headerSubtitle}>
          Kapsamlı değerlendirme için tüm testleri tamamlamanız önerilir.
        </Text>
      </View>
      
      <View style={styles.testsContainer}>
        {tests.map((test) => (
          <TouchableOpacity
            key={test.id}
            style={[styles.testCard, { borderLeftColor: test.color }]}
            onPress={() => navigation.navigate(test.screen)}
          >
            <View style={styles.testContent}>
              <View style={[styles.iconContainer, { backgroundColor: test.color }]}>
                <Ionicons name={test.icon} size={24} color="#fff" />
              </View>
              <View style={styles.testInfo}>
                <Text style={styles.testTitle}>{test.title}</Text>
                <Text style={styles.testDescription}>{test.description}</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#999" />
            </View>
          </TouchableOpacity>
        ))}
      </View>
      
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Testler Hakkında</Text>
        <Text style={styles.infoText}>
          Tüm testleri tamamladığınızda, zeka seviyeniz, kişilik özellikleriniz ve psikolojik durumunuz hakkında kapsamlı bir değerlendirme sunulacaktır. Yapay zeka destekli analiz, güçlü yönlerinizi ve gelişim alanlarınızı belirlemenize yardımcı olacaktır.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  testsContainer: {
    padding: 15,
  },
  testCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 5,
  },
  testContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  testInfo: {
    flex: 1,
  },
  testTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  testDescription: {
    fontSize: 14,
    color: '#666',
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default TestSelectionScreen;