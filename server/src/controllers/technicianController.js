// server/src/controllers/technicianController.js
import {
  createTechnician,
  getTechnicians,
  getTechnicianById,
  updateTechnician,
  deleteTechnician,
} from '../services/technicianService.js';

export const create = async (req, res) => {
  try {
    const technician = await createTechnician(req.body);
    res.status(201).json({ success: true, technician });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const list = async (req, res) => {
  try {
    const technicians = await getTechnicians();
    res.status(200).json({ success: true, technicians });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const detail = async (req, res) => {
  try {
    const technician = await getTechnicianById(req.params.id);
    if (!technician) {
      return res.status(404).json({ success: false, message: 'Technician not found' });
    }
    res.status(200).json({ success: true, technician });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const technician = await updateTechnician(req.params.id, req.body);
    res.status(200).json({ success: true, technician });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    await deleteTechnician(req.params.id);
    res.status(200).json({ success: true, message: 'Technician deleted' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
