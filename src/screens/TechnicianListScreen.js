// src/screens/TechnicianListScreen.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { getAllTechnicians } from '../services/technicianService';
import TechnicianCard from '../components/TechnicianCard';
import { globalStyles } from '../styles/globalStyles';

export default function TechnicianListScreen({ navigation }) {
  const technicians = getAllTechnicians();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>All Registered Technicians</Text>

      {technicians.length === 0 ? (
        <Text>No technicians registered yet.</Text>
      ) : (
        <FlatList
          data={technicians}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TechnicianCard
              technician={item}
              onPress={() => navigation.navigate('Profile', { technician: item })}
            />
          )}
        />
      )}
    </View>
  );
}
