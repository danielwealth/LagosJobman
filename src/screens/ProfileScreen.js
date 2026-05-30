// src/screens/ProfileScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import AvailabilityToggle from '../components/AvailabilityToggle';
import ImageUploader from '../components/ImageUploader';
import { updateTechnician } from '../services/technicianService';
import { globalStyles } from '../styles/globalStyles';

export default function ProfileScreen({ route }) {
  const { technician } = route.params || {};
  const [available, setAvailable] = useState(technician?.available || false);
  const [faceImage, setFaceImage] = useState(technician?.faceImage || null);
  const [workImage, setWorkImage] = useState(technician?.workImage || null);

  if (!technician) {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>No technician data provided.</Text>
      </View>
    );
  }

  const handleUpdate = () => {
    const updated = updateTechnician(technician.id, {
      available,
      faceImage,
      workImage,
    });
    Alert.alert('Profile Updated', `${updated.name}'s profile has been updated.`);
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{technician.name}</Text>
      <Text style={globalStyles.label}>Job Type: {technician.jobType}</Text>
      <Text style={globalStyles.label}>Location (LGA): {technician.lga}</Text>

      <AvailabilityToggle available={available} setAvailable={setAvailable} />

      <ImageUploader label="Update Face Photo" onImageSelected={setFaceImage} />
      {faceImage && <Image source={{ uri: faceImage }} style={styles.image} />}

      <ImageUploader label="Update Work Sample" onImageSelected={setWorkImage} />
      {workImage && <Image source={{ uri: workImage }} style={styles.image} />}

      <TouchableOpacity style={globalStyles.button} onPress={handleUpdate}>
        <Text style={globalStyles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image: { width: 150, height: 150, borderRadius: 8, marginVertical: 10 },
});
