// components/Card.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../utils/colors';

const Card = ({ children, style = {}, onPress = null }) => {
  if (onPress) {
    return (
      <TouchableOpacity 
        style={[styles.card, style]} 
        onPress={onPress} 
        activeOpacity={0.8}
      >
        {children}
      </TouchableOpacity>
    );
  }
  
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 4,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default Card;