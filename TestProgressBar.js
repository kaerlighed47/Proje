// components/TestProgressBar.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../utils/colors';

const TestProgressBar = ({ 
  currentQuestionIndex, 
  totalQuestions, 
  style = {} 
}) => {
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  
  return (
    <View style={[styles.container, style]}>
      <View style={styles.progressTextContainer}>
        <Text style={styles.progressText}>
          {currentQuestionIndex + 1} / {totalQuestions}
        </Text>
      </View>
      
      <View style={styles.progressBarContainer}>
        <View 
          style={[
            styles.progressBar, 
            { width: ${progress}% }
          ]} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  progressTextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 4,
  },
  progressText: {
    fontSize: 14,
    color: colors.textLight,
    fontWeight: '500',
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: colors.lightGray,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
});

export default TestProgressBar;