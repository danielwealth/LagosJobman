// src/components/TechnicianCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { addFavorite, removeFavorite, getFavorites } from '../services/favoritesService';

export default function TechnicianCard({ technician, onPress }) {
  const jobIcons = {
    Electrician: 'flash',
    Plumber: 'water-pump',
    Bricklayer: 'hammer',
    Carpenter: 'saw-blade',
    Painter: 'brush',
  };

  const jobIcon = jobIcons[technician.jobType] || 'account';
  const isFavorite = getFavorites().some((fav) => fav.id === technician.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(technician.id);
    } else {
      addFavorite(technician);
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.row}>
        <Icon name={jobIcon} size={24} color="#2196F3" style={styles.icon} />
        <Text style={styles.name}>{technician.name}</Text>
        <TouchableOpacity onPress={toggleFavorite}>
          <Icon
            name={isFavorite ? 'star' : 'star-outline'}
            size={24}
            color={isFavorite ? '#FFD700' : '#999'}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.detail}>{technician.jobType} - {technician.lga}</Text>

      <View style={styles.row}>
        <Icon
          name={technician.available ? 'check-circle' : 'close-circle'}
          size={20}
          color={technician.available ? '#4CAF50' : '#f44336'}
          style={styles.icon}
        />
        <Text style={{ color: technician.available ? '#4CAF50' : '#f44336' }}>
          {technician.available ? 'Available' : 'Unavailable'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { padding: 15, marginVertical: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, backgroundColor: '#fff' },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  icon: { marginLeft: 8 },
  name: { fontSize: 18, fontWeight: 'bold', flex: 1 },
  detail: { fontSize: 14, color: '#333' },
});
