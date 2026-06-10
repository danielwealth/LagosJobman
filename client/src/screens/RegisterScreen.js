// src/screens/RegisterScreen.js
import React, { useState } from 'react';
import AvailabilityToggle from '../components/AvailabilityToggle';
import ImageUploader from '../components/ImageUploader';
import { createTechnician } from '../services/technicianService';
import { globalStyles } from '../styles/globalStyles';
import { useNavigate } from 'react-router-dom';

const lagosLGAs = [
  'Agege','Ajeromi-Ifelodun','Alimosho','Amuwo-Odofin','Apapa','Badagry',
  'Epe','Eti-Osa','Ikeja','Ikorodu','Kosofe','Lagos Island','Lagos Mainland',
  'Mushin','Ojo','Oshodi-Isolo','Shomolu','Surulere','Ifako-Ijaiye','Ibeju-Lekki'
];

const jobTypes = [
  'Electrician','Plumber','Bricklayer','Carpenter','Painter','Tiler','Solar Installer',
  'Welder','Mechanic','AC/Fridge Repair','Generator Technician','ICT Support',
  'Phone Repair','CCTV Installer','Satellite Dish Installer'
];

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [jobType, setJobType] = useState(jobTypes[0]);
  const [lga, setLga] = useState(lagosLGAs[0]);
  const [available, setAvailable] = useState(true);
  const [faceImage, setFaceImage] = useState(null);
  const [workImage, setWorkImage] = useState(null);

  const navigate = useNavigate();

  const handleRegister = () => {
    const profile = { 
      name, 
      phoneNumber, 
      message, 
      jobType, 
      lga, 
      available, 
      faceImage, 
      workImage 
    };
    const newTech = createTechnician(profile);
    window.alert(`Technician ${newTech.name} registered successfully!`);
    navigate('/profile', { state: { technician: newTech } });
  };

  return (
    <div style={globalStyles.container}>
      <h2 style={globalStyles.title}>Register as Technician</h2>

      <input
        style={globalStyles.input}
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        style={globalStyles.input}
        type="tel"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <label style={globalStyles.label}>Job Type</label>
      <select
        style={globalStyles.input}
        value={jobType}
        onChange={(e) => setJobType(e.target.value)}
      >
        {jobTypes.map((job) => (
          <option key={job} value={job}>{job}</option>
        ))}
      </select>

      <label style={globalStyles.label}>Lagos LGA</label>
      <select
        style={globalStyles.input}
        value={lga}
        onChange={(e) => setLga(e.target.value)}
      >
        {lagosLGAs.map((area) => (
          <option key={area} value={area}>{area}</option>
        ))}
      </select>

      <AvailabilityToggle available={available} setAvailable={setAvailable} />

      <ImageUploader label="Face Photo" onImageSelected={setFaceImage} />
      <ImageUploader label="Work Sample" onImageSelected={setWorkImage} />

      <textarea
        style={{ ...globalStyles.input, height: '100px' }}
        placeholder="Leave a message for clients"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button style={globalStyles.button} onClick={handleRegister}>
        Submit Registration
      </button>
    </div>
  );
}
