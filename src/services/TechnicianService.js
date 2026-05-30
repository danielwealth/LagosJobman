// src/services/technicianService.js
let technicians = []; // Temporary in-memory store

export function createTechnician(profile) {
  const newTech = { id: Date.now().toString(), ...profile };
  technicians.push(newTech);
  console.log('Technician created:', newTech);
  return newTech;
}

export function updateTechnician(id, updates) {
  technicians = technicians.map((tech) =>
    tech.id === id ? { ...tech, ...updates } : tech
  );
  return technicians.find((tech) => tech.id === id);
}

export function toggleAvailability(id, available) {
  return updateTechnician(id, { available });
}

export function getTechnicianById(id) {
  return technicians.find((tech) => tech.id === id);
}

export function getAllTechnicians() {
  return technicians;
}
