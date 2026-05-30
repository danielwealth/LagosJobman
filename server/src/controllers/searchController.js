// server/src/controllers/searchController.js
import { searchTechnicians } from '../services/searchService.js';

export const search = async (req, res) => {
  try {
    const { jobType, lga } = req.query;
    const results = await searchTechnicians(jobType, lga);
    res.status(200).json({ success: true, results });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
