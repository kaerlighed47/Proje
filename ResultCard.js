// components/ResultCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Card from './Card';
import Button from './Button';
import colors from '../utils/colors';
import { formatDate } from '../utils/helpers';

const ResultCard = ({ result, showDetails = true }) => {
  const navigation = useNavigation();
  
  const handleViewDetails = () => {
    navigation.navigate('ResultDetails', { resultId: result._id });
  };

  return (
    <Card style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.date}>{formatDate(result.testDate)}</Text>
        <View style={styles.iqContainer}>
          <Text style={styles.iqLabel}>IQ</Text>
          <Text style={styles.iqValue}>{result.iq}</Text>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kişilik Profili</Text>
        <View style={styles.traitsContainer}>
          {Object.entries(result.personality).map(([trait, value]) => (
            <View key={trait} style={styles.traitItem}>
              <View style={styles.traitNameContainer}>
                <Text style={styles.traitName}>{getTraitName(trait)}</Text>
              </View>
              <View style={styles.progressBarContainer}>
                <View 
                  style={[
                    styles.progressBar, 
                    { width: ${value}%, backgroundColor: getTraitColor(trait) }
                  ]} 
                />
              </View>
              <Text style={styles.traitValue}>{Math.round(value)}%</Text>
            </View>
          ))}
        </View>
      </View>
      
      {showDetails && (
        <Button 
          title="Detayları Görüntüle" 
          type="outline" 
          onPress={handleViewDetails} 
        />
      )}
    </Card>
  );
};

const getTraitName = (trait) => {
  const traits = {
    extraversion: 'Dışadönüklük',
    agreeableness: 'Uyumluluk',
    conscientiousness: 'Sorumluluk',
    neuroticism: 'Duygusal Denge',
    openness: 'Deneyime Açıklık'
  };
  return traits[trait] || trait;
};

const getTraitColor = (trait) => {
  const colors = {
    extraversion: '#FF6B6B',
    agreeableness: '#4ECDC4',
    conscientiousness: '#45B7D1',
    neuroticism: '#F9C74F',
    openness: '#9B5DE5'
  };
  return colors[trait] || colors.primary;
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  date: {
    fontSize: 14,
    color: colors.textLight,
  },
  iqContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  iqLabel: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
    marginRight: 4,
  },
  iqValue: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textDark,
    marginBottom: 12,
  },
  traitsContainer: {
    marginBottom: 8,
  },
  traitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  traitNameContainer: {
    width: 100,
  },
  traitName: {
    fontSize: 14,
    color: colors.textDark,
  },
  progressBarContainer: {
    flex: 1,
    height: 10,
    backgroundColor: colors.lightGray,
    borderRadius: 5,
    marginRight: 8,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 5,
  },
  traitValue: {
    width: 40,
    fontSize: 14,
    textAlign: 'right',
    color: colors.textDark,
  },
});

export default ResultCard;