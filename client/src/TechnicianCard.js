// src/components/TechnicianCard.js
import React from 'react';

export default function TechnicianCard({ technician, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{technician.name}</Text>
      <Text>{technician.jobType} - {technician.lga}</Text>
      <Text style={{ color: technician.available ? 'green' : 'red' }}>
        {technician.available ? 'Available' : 'Unavailable'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { padding: 15, marginVertical: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 8 },
  name: { fontSize: 18, fontWeight: 'bold' },
});
