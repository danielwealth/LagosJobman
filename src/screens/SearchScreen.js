// src/screens/SearchScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Picker, FlatList } from 'react-native';
import TechnicianCard from '../components/TechnicianCard';
import { searchTechnicians } from '../services/searchService';
import { globalStyles } from '../styles/globalStyles';

const lagosLGAs = ['Ikeja', 'Surulere', 'Eti-Osa', 'Alimosho', 'Apapa'];
const jobTypes = ['Electrician', 'Plumber', 'Bricklayer', 'Carpenter', 'Painter'];

export default function SearchScreen({ navigation }) {
  const [selectedJob, setSelectedJob] = useState(jobTypes[0]);
  const [selectedLga, setSelectedLga] = useState(lagosLGAs[0]);

  // Call search service
  const filteredTechnicians = searchTechnicians(selectedJob, selectedLga);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Search Technicians</Text>

      <Text style={globalStyles.label}>Job Type</Text>
      <Picker selectedValue={selectedJob} onValueChange={(val) => setSelectedJob(val)}>
        {jobTypes.map((job) => <Picker.Item key={job} label={job} value={job} />)}
      </Picker>

      <Text style={globalStyles.label}>Lagos LGA</Text>
      <Picker selectedValue={selectedLga} onValueChange={(val) => setSelectedLga(val)}>
        {lagosLGAs.map((area) => <Picker.Item key={area} label={area} value={area} />)}
      </Picker>

      <Text style={globalStyles.label}>Available Technicians</Text>
      {filteredTechnicians.length === 0 ? (
        <Text>No available technicians found.</Text>
      ) : (
        <FlatList
          data={filteredTechnicians}
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

const styles = StyleSheet.create({
  label: { fontSize: 16, marginTop: 10 },
});
