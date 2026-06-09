// src/screens/SearchScreen.js
import React, { useState } from 'react';
import { globalStyles } from '../styles/globalStyles';
import { lagosLGAs, jobTypes } from '../utils/constants'; // reuse arrays
import { searchTechnicians } from '../services/technicianService';

export default function SearchScreen() {
  const [selectedLga, setSelectedLga] = useState('');
  const [selectedJob, setSelectedJob] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const technicians = await searchTechnicians(selectedLga, selectedJob);
    setResults(technicians);
  };

  return (
    <div style={globalStyles.container}>
      <h2 style={globalStyles.title}>Find Technicians</h2>

      <label style={globalStyles.label}>Select LGA</label>
      <select
        style={globalStyles.input}
        value={selectedLga}
        onChange={(e) => setSelectedLga(e.target.value)}
      >
        <option value="">-- Any LGA --</option>
        {lagosLGAs.map((area) => (
          <option key={area} value={area}>{area}</option>
        ))}
      </select>

      <label style={globalStyles.label}>Select Job Type</label>
      <select
        style={globalStyles.input}
        value={selectedJob}
        onChange={(e) => setSelectedJob(e.target.value)}
      >
        <option value="">-- Any Job --</option>
        {jobTypes.map((job) => (
          <option key={job} value={job}>{job}</option>
        ))}
      </select>

      <button style={globalStyles.button} onClick={handleSearch}>
        Search
      </button>

      <div style={{ marginTop: '20px' }}>
        {results.length > 0 ? (
          results.map((tech) => (
            <div key={tech.id} style={globalStyles.card}>
              <h3>{tech.name}</h3>
              <p>{tech.jobType} in {tech.lga}</p>
              <p>{tech.available ? 'Available' : 'Not Available'}</p>
            </div>
          ))
        ) : (
          <p>No technicians found. Try another filter.</p>
        )}
      </div>
    </div>
  );
}
