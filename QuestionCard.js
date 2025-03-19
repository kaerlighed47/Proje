// components/QuestionCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Card from './Card';
import colors from '../utils/colors';

const QuestionCard = ({ 
  question, 
  selectedOption, 
  onSelectOption, 
  questionNumber, 
  totalQuestions 
}) => {
  return (
    <Card style={styles.card}>
      <View style={styles.questionHeader}>
        <Text style={styles.questionNumber}>
          Soru {questionNumber} / {totalQuestions}
        </Text>
        <Text style={styles.category}>
          {getCategoryName(question.category)}
          {question.difficulty && ` - ${getDifficultyName(question.difficulty)}`}
        </Text>
      </View>
      
      <Text style={styles.questionText}>{question.text}</Text>
      
      <View style={styles.optionsContainer}>
        {question.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              selectedOption === index && styles.selectedOption
            ]}
            onPress={() => onSelectOption(index)}
          >
            <Text style={[
              styles.optionText,
              selectedOption === index && styles.selectedOptionText
            ]}>
              {option.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </Card>
  );
};

const getCategoryName = (category) => {
  const categories = {
    intelligence: 'Zeka',
    personality: 'Kişilik',
    pathology: 'Psikoloji'
  };
  return categories[category] || category;
};

const getDifficultyName = (difficulty) => {
  const difficulties = {
    easy: 'Kolay',
    medium: 'Orta',
    hard: 'Zor'
  };
  return difficulties[difficulty] || difficulty;
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  questionNumber: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '500',
  },
  category: {
    fontSize: 14,
    color: colors.textLight,
    fontStyle: 'italic',
  },
  questionText: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.textDark,
    marginBottom: 20,
    lineHeight: 24,
  },
  optionsContainer: {
    marginTop: 8,
  },
  option: {
    padding: 16,
    backgroundColor: colors.background,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  selectedOption: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  optionText: {
    fontSize: 16,
    color: colors.textDark,
  },
  selectedOptionText: {
    color: colors.white,
    fontWeight: '500',
  },
});

export default QuestionCard;