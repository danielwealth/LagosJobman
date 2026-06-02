// src/screens/RegisterScreen.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AvailabilityToggle from '../components/AvailabilityToggle';
import ImageUploader from '../components/ImageUploader';
import { createTechnician } from '../services/technicianService';
import '../styles/globalStyles.css'; // converted CSS styles

const lagosLGAs = ['Ikeja', 'Surulere', 'Eti-Osa', 'Alimosho', 'Apapa'];
const jobTypes = [
  'Electrician',
  'Plumber',
  'Bricklayer',
  'Carpenter',
  'Painter',
  'Tiler',
  'SolarInstaller'
];

export default function RegisterScreen() {
  const navigate = useNavigate();

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
    window.alert(`Technician ${newTech.name} registered successfully!`);

    // Navigate to Profile screen with the new technician data
    navigate('/profile', { state: { technician: newTech } });
  };

  return (
    <div className="container">
      <h1 className="title">Register as Technician</h1>

      <input
        className="input"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="label">Job Type</label>
      <select
        className="input"
        value={jobType}
        onChange={(e) => setJobType(e.target.value)}
      >
        {jobTypes.map((job) => (
          <option key={job} value={job}>{job}</option>
        ))}
      </select>

      <label className="label">Lagos LGA</label>
      <select
        className="input"
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

      <button className="button" onClick={handleRegister}>
        Submit Registration
      </button>
    </div>
  );
}
