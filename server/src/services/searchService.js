// server/src/services/searchService.js
import Technician from '../models/Technician.js';

// Search technicians by jobType and LGA
export const searchTechnicians = async (jobType, lga) => {
  const query = {};
  if (jobType) query.jobType = jobType;
  if (lga) query.lga = lga;

  const results = await Technician.find(query).populate('user', 'email role');
  return results;
};
