// server/src/routes/technicianRoutes.js
import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
  create,
  list,
  detail,
  update,
  remove,
} from '../controllers/technicianController.js';

const router = express.Router();

// GET /api/technicians
router.get('/', list);

// GET /api/technicians/:id
router.get('/:id', detail);

// POST /api/technicians
router.post('/', protect, create);

// PUT /api/technicians/:id
router.put('/:id', protect, update);

// DELETE /api/technicians/:id
router.delete('/:id', protect, remove);

export default router;
