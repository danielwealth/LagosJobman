import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { protect } from '../middleware/authMiddleware.js';
import { create, list, detail, update, remove } from '../controllers/technicianController.js';
import Technician from '../models/Technician.js';

const router = express.Router();
// POST /api/technicians/register
router.post('/register', async (req, res) => {
  try {
    const technician = new Technician(req.body);
    await technician.save();

    res.json({
      success: true,
      technician,
      message: 'Technician registered successfully',
    });
  } catch (err) {
    console.error('Technician registration error:', err);
    res.status(500).json({
      success: false,
      message: 'Server error during technician registration',
    });
  }
});

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: path.join(__dirname, '../../uploads'),
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// ✅ Upload endpoint
router.post('/upload', protect, upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  const fileUrl = `/uploads/${req.file.filename}`;
  res.json({ url: fileUrl });
});

// ✅ Technician CRUD
router.get('/', list);
router.get('/:id', detail);
router.post('/', protect, create);
router.put('/:id', protect, update);
router.delete('/:id', protect, remove);

export default router;
