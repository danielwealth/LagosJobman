import Technician from '../models/Technician.js';

// Create technician
export const create = async (req, res) => {
  try {
    const { name, phoneNumber, message, jobType, lga, available, faceImage, workImage } = req.body;

    const technician = new Technician({
      name,
      phoneNumber,
      message,
      jobType,
      lga,
      available,
      faceImage, // URL returned by /upload
      workImage, // URL returned by /upload
    });

    await technician.save();
    res.status(201).json(technician);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create technician', error: err.message });
  }
};

// List all technicians
export const list = async (req, res) => {
  try {
    const technicians = await Technician.find();
    res.json(technicians);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch technicians', error: err.message });
  }
};

// Get technician detail
export const detail = async (req, res) => {
  try {
    const technician = await Technician.findById(req.params.id);
    if (!technician) return res.status(404).json({ message: 'Technician not found' });
    res.json(technician);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch technician', error: err.message });
  }
};

// Update technician
export const update = async (req, res) => {
  try {
    const technician = await Technician.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!technician) return res.status(404).json({ message: 'Technician not found' });
    res.json(technician);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update technician', error: err.message });
  }
};

// Delete technician
export const remove = async (req, res) => {
  try {
    const technician = await Technician.findByIdAndDelete(req.params.id);
    if (!technician) return res.status(404).json({ message: 'Technician not found' });
    res.json({ message: 'Technician deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete technician', error: err.message });
  }
};
