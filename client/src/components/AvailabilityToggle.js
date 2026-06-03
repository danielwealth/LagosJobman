// src/components/AvailabilityToggle.js
import React from 'react';

export default function AvailabilityToggle({ available, setAvailable }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Available</Text>
      <Switch
        value={available}
        onValueChange={setAvailable}
        thumbColor={available ? '#4CAF50' : '#f44336'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  label: { fontSize: 16, marginRight: 10 },
});
