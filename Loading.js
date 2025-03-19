// components/Loading.js
import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import colors from '../utils/colors';

const Loading = ({ 
  fullScreen = false, 
  text = 'Yükleniyor...', 
  size = 'large', 
  color = colors.primary 
}) => {
  if (fullScreen) {
    return (
      <View style={styles.fullScreenContainer}>
        <ActivityIndicator size={size} color={color} />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  container: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 8,
    color: colors.textDark,
    fontSize: 16,
  },
});

export default Loading;