// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { logoutUser } from '../services/authService';

export default function HomeScreen({ navigation }) {
  const handleLogout = async () => {
    try {
      const result = await logoutUser();
      if (result.success) {
        Alert.alert('Logged out', 'You have been signed out.');
        navigation.navigate('Login'); // Redirect to Login screen
      }
    } catch (error) {
      Alert.alert('Error', 'Logout failed.');
      console.error(error);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Technician Marketplace</Text>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={globalStyles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navigation.navigate('Search')}
      >
        <Text style={globalStyles.buttonText}>Search Technicians</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={globalStyles.buttonText}>View Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={handleLogout}
      >
        <Text style={globalStyles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
