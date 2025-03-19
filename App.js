// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './contexts/AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';

// Screens

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import TestSelectionScreen from './screens/TestSelectionScreen';
import IntelligenceTestScreen from './screens/IntelligenceTestScreen';
import PersonalityTestScreen from './screens/PersonalityTestScreen';
import PathologyTestScreen from './screens/PathologyTestScreen';
import ResultsScreen from './screens/ResultsScreen';
import ResultDetailScreen from './screens/ResultDetailScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen
              name='Login'
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Register'
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Home'
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='TestSelection'
              component={TestSelectionScreen}
              options={{ title: 'Test Seçimi' }}
            />
            <Stack.Screen
              name='IntelligenceTest'
              component={IntelligenceTestScreen}
              options={{ title: 'Zeka Testi' }}
            />
            <Stack.Screen
              name='PersonalityTest'
              component={PersonalityTestScreen}
              options={{ title: 'Kişilik Testi' }}
            />
            <Stack.Screen
              name='PathologyTest'
              component={PathologyTestScreen}
              options={{ title: 'Psikolojik Durum Değerlendirmesi' }}
            />
            <Stack.Screen
              name='Results'
              component={ResultsScreen}
              options={{ title: 'Sonuçlar' }}
            />
            <Stack.Screen
              name='ResultDetail'
              component={ResultDetailScreen}
              options={{ title: 'Sonuç Detayı' }}
            />
            <Stack.Screen
              name='Profile'
              component={ProfileScreen}
              options={{ title: 'Profil' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
