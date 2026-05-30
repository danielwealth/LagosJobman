// src/services/searchService.js
import { getAllTechnicians } from './technicianService';

export function searchTechnicians(jobType, lga) {
  const allTechs = getAllTechnicians();
  return allTechs.filter(
    (tech) =>
      tech.jobType === jobType &&
      tech.lga === lga &&
      tech.available
  );
}
