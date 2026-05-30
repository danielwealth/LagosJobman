// src/screens/FavoritesScreen.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { getFavorites } from '../services/favoritesService';
import TechnicianCard from '../components/TechnicianCard';
import { globalStyles } from '../styles/globalStyles';

export default function FavoritesScreen({ navigation }) {
  const favorites = getFavorites();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Favorite Technicians</Text>

      {favorites.length === 0 ? (
        <Text>No favorites yet. Tap the star icon on a technician to add them.</Text>
      ) : (
        <FlatList
          data={favorites}
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
