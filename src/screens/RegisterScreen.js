// src/screens/RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AvailabilityToggle from '../components/AvailabilityToggle';
import ImageUploader from '../components/ImageUploader';
import { createTechnician } from '../services/technicianService';
import { globalStyles } from '../styles/globalStyles';
import { isValidEmail, isValidPassword } from '../utils/validators';
import { JOB_TYPES, LAGOS_LGAS } from '../utils/constants';

const lagosLGAs = ['Ikeja', 'Surulere', 'Eti-Osa', 'Alimosho', 'Apapa'];
const jobTypes = ['Electrician', 'Plumber', 'Bricklayer', 'Carpenter', 'Painter','Tiler',
    'SolarInstaller'
];

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [jobType, setJobType] = useState(jobTypes[0]);
  const [lga, setLga] = useState(lagosLGAs[0]);
  const [available, setAvailable] = useState(true);
  const [faceImage, setFaceImage] = useState(null);
  const [workImage, setWorkImage] = useState(null);

  const handleRegister = () => {
    const profile = {
      name,
      jobType,
      lga,
      available,
      faceImage,
      workImage,
    };

    const newTech = createTechnician(profile);
    alert(`Technician ${newTech.name} registered successfully!`);

    // Navigate to Profile screen with the new technician data
    navigation.navigate('Profile', { technician: newTech });
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Register as Technician</Text>

      <TextInput
        style={globalStyles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />

      <Text style={globalStyles.label}>Job Type</Text>
      
      <Picker selectedValue={jobType} onValueChange={(val) => setJobType(val)}>
        {jobTypes.map((job) => (
          <Picker.Item key={job} label={job} value={job} />
        ))}
      </Picker>

      <Text style={globalStyles.label}>Lagos LGA</Text>
      <Picker selectedValue={lga} onValueChange={(val) => setLga(val)}>
        {lagosLGAs.map((area) => (
          <Picker.Item key={area} label={area} value={area} />
        ))}
      </Picker>

      <AvailabilityToggle available={available} setAvailable={setAvailable} />

      <ImageUploader label="Face Photo" onImageSelected={setFaceImage} />
      <ImageUploader label="Work Sample" onImageSelected={setWorkImage} />

      <Button title="Submit Registration" onPress={handleRegister} />
    </View>
  );
}
