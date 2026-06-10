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
  const [jobType, setJobType] = useState(jobTypes[0]);
  const [lga, setLga] = useState(lagosLGAs[0]);
  const [available, setAvailable] = useState(true);
  const [faceImage, setFaceImage] = useState(null);
  const [workImage, setWorkImage] = useState(null);

  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!name || !faceImage || !workImage) {
      alert('Please fill all fields and upload both images.');
      return;
    }

    const profile = { name, jobType, lga, available, faceImage, workImage };

    try {
      const result = await createTechnician(profile);

      if (result.success) {
        alert(result.message);
        navigate('/profile', { state: { technician: result.technician } });
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.error('Registration failed:', err);
      alert('Something went wrong. Please try again.');
    }
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

      <button style={globalStyles.button} onClick={handleRegister}>
        Submit Registration
      </button>
    </div>
  );
}
