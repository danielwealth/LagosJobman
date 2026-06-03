// src/components/AvailabilityToggle.js
import React from 'react';

export default function AvailabilityToggle({ available, setAvailable }) {
  return (
    <div style={styles.container}>
      <label style={styles.label}>Available</label>
      <input
        type="checkbox"
        checked={available}
        onChange={(e) => setAvailable(e.target.checked)}
        style={{
          ...styles.switch,
          accentColor: available ? '#4CAF50' : '#f44336',
        }}
      />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
  },
  label: {
    fontSize: '16px',
    marginRight: '10px',
  },
  switch: {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
  },
};
