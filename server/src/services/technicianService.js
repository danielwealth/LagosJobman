// server/src/services/technicianService.js
import Technician from '../models/Technician.js';

// Create a new technician
export const createTechnician = async (data) => {
  const technician = await Technician.create(data);
  return technician;
};

// Get all technicians
export const getTechnicians = async () => {
  const technicians = await Technician.find().populate('user', 'email role');
  return technicians;
};

// Get technician by ID
export const getTechnicianById = async (id) => {
  const technician = await Technician.findById(id).populate('user', 'email role');
  return technician;
};

// Update technician
export const updateTechnician = async (id, data) => {
  const technician = await Technician.findByIdAndUpdate(id, data, { new: true });
  return technician;
};

// Delete technician
export const deleteTechnician = async (id) => {
  await Technician.findByIdAndDelete(id);
  return true;
};
