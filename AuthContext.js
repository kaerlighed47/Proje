//context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login, register, getUserInfo } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const loadToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        if (storedToken) {
          setToken(storedToken);
          const userData = await getUserInfo(storedToken);
          setUser(userData);
          setIsAuthenticated(true);
        }
      } catch (err) {
        console.error('Error loading auth:', err);
      } finally {
        setLoading(false);
      }
    };

    loadToken();
  }, []);

  const loginUser = async (email, password) => {
    try {
      setLoading(true);
      setError(null);
      const response = await login(email, password);
      setToken(response.token);
      setUser(response.user);
      setIsAuthenticated(true);
      await AsyncStorage.setItem('token', response.token);
      return true;
    } catch (err) {
      setError(err.message || 'Giriş yapılamadı');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (username, email, password) => {
    try {
      setLoading(true);
      setError(null);
      const response = await register(username, email, password);
      setToken(response.token);
      setUser(response.user);
      setIsAuthenticated(true);
      await AsyncStorage.setItem('token', response.token);
      return true;
    } catch (err) {
      setError(err.message || 'Kayıt yapılamadı');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    try {
      setLoading(true);
      await AsyncStorage.removeItem('token');
      setToken(null);
      setUser(null);
      setIsAuthenticated(false);
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated,
        loading,
        error,
        loginUser,
        registerUser,
        logoutUser,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};