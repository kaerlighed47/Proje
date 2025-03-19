//screens/ResultsDetailScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { fetchResultDetails } from '../services/api';
import { Card } from '../components/Card';
import { colors } from '../utils/colors';
import { Ionicons } from '@expo/vector-icons';

const ResultDetailsScreen = ({ route, navigation }) => {
  const { resultId } = route.params;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getResultDetails = async () => {
      try {
        setLoading(true);
        const data = await fetchResultDetails(resultId);
        setResult(data);
      } catch (err) {
        setError('Sonuçlar yüklenirken bir hata oluştu.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getResultDetails();
  }, [resultId]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity
          style={styles.retryButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.retryButtonText}>Geri Dön</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Test Sonuç Detayları</Text>
      </View>

      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>Test Tarihi: {formatDate(result.testDate)}</Text>
      </View>

      {/* IQ Bölümü */}
      <Card style={styles.section}>
        <Text style={styles.sectionTitle}>IQ Skoru</Text>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreValue}>{result.iq}</Text>
          <View style={styles.scoreDescription}>
            <Text style={styles.scoreText}>
              {result.iq < 85 && 'Ortalamanın altında'}
              {result.iq >= 85 && result.iq < 115 && 'Ortalama'}
              {result.iq >= 115 && result.iq < 130 && 'Ortalamanın üstünde'}
              {result.iq >= 130 && 'Üstün zeka'}
            </Text>
          </View>
        </View>
      </Card>

      {/* Kişilik Özellikleri Bölümü */}
      <Card style={styles.section}>
        <Text style={styles.sectionTitle}>Kişilik Özellikleri</Text>
        <View style={styles.personalityContainer}>
          <TraitBar 
            label="Dışadönüklük" 
            value={result.personality.extraversion} 
            color={colors.extraversion}
          />
          <TraitBar 
            label="Uyumluluk" 
            value={result.personality.agreeableness} 
            color={colors.agreeableness}
          />
          <TraitBar 
            label="Sorumluluk" 
            value={result.personality.conscientiousness} 
            color={colors.conscientiousness}
          />
          <TraitBar 
            label="Duygusal Denge" 
            value={result.personality.neuroticism} 
            color={colors.neuroticism}
          />
          <TraitBar 
            label="Deneyime Açıklık" 
            value={result.personality.openness} 
            color={colors.openness}
          />
        </View>
      </Card>

      {/* Patolojik Durumlar Bölümü */}
      <Card style={styles.section}>
        <Text style={styles.sectionTitle}>Psikolojik Değerlendirme</Text>
        <View style={styles.pathologyContainer}>
          <TraitBar 
            label="Depresyon" 
            value={result.pathology.depression} 
            color={colors.depression}
            inverted
          />
          <TraitBar 
            label="Anksiyete" 
            value={result.pathology.anxiety} 
            color={colors.anxiety}
            inverted
          />
          <TraitBar 
            label="Bipolar Bozukluk" 
            value={result.pathology.bipolar} 
            color={colors.bipolar}
            inverted
          />
          <TraitBar 
            label="OKB" 
            value={result.pathology.ocd} 
            color={colors.ocd}
            inverted
          />
          <TraitBar 
            label="Şizofreni" 
            value={result.pathology.schizophrenia} 
            color={colors.schizophrenia}
            inverted
          />
          <TraitBar 
            label="PTSD" 
            value={result.pathology.ptsd} 
            color={colors.ptsd}
            inverted
          />
        </View>
      </Card>

      {/* AI Analiz Bölümü */}
      <Card style={styles.section}>
        <Text style={styles.sectionTitle}>AI Analizi</Text>
        <Text style={styles.aiAnalysisText}>{result.aiAnalysis}</Text>
      </Card>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.shareButton}
          onPress={() => {/* Share functionality can be implemented here */}}
        >
          <Ionicons name="share-outline" size={20} color="#fff" />
          <Text style={styles.shareButtonText}>Sonuçları Paylaş</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const TraitBar = ({ label, value, color, inverted = false }) => {
  // For pathology traits, higher scores are worse (inverted)
  const displayValue = inverted ? 100 - value : value;
  const barWidth = `${value}%`;
  
  const getDescription = (val, inv) => {
    const actualVal = inv ? 100 - val : val;
    
    if (actualVal < 20) return inv ? 'Çok düşük' : 'Çok düşük';
    if (actualVal < 40) return inv ? 'Düşük' : 'Düşük';
    if (actualVal < 60) return inv ? 'Orta' : 'Orta';
    if (actualVal < 80) return inv ? 'Yüksek' : 'Yüksek';
    return inv ? 'Çok yüksek' : 'Çok yüksek';
  };

  return (
    <View style={styles.traitContainer}>
      <View style={styles.traitHeader}>
        <Text style={styles.traitLabel}>{label}</Text>
        <Text style={styles.traitValue}>{displayValue}%</Text>
      </View>
      <View style={styles.traitBarContainer}>
        <View 
          style={[
            styles.traitBar, 
            { width: barWidth, backgroundColor: color }
          ]} 
        />
      </View>
      <Text style={styles.traitDescription}>
        {getDescription(value, inverted)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: colors.error,
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginLeft: 8,
  },
  dateContainer: {
    marginBottom: 16,
  },
  dateText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  section: {
    marginBottom: 20,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 16,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scoreValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.primary,
  },
  scoreDescription: {
    flex: 1,
    marginLeft: 20,
  },
  scoreText: {
    fontSize: 16,
    color: colors.text,
  },
  personalityContainer: {
    marginTop: 8,
  },
  pathologyContainer: {
    marginTop: 8,
  },
  traitContainer: {
    marginBottom: 16,
  },
  traitHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  traitLabel: {
    fontSize: 14,
    color: colors.text,
  },
  traitValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text,
  },
  traitBarContainer: {
    height: 12,
    backgroundColor: '#E0E0E0',
    borderRadius: 6,
    overflow: 'hidden',
  },
  traitBar: {
    height: '100%',
    borderRadius: 6,
  },
  traitDescription: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
  },
  aiAnalysisText: {
    fontSize: 14,
    lineHeight: 22,
    color: colors.text,
  },
  footer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default ResultDetailsScreen;