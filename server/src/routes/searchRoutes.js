// server/src/routes/searchRoutes.js
import express from 'express';
import { search } from '../controllers/searchController.js';

const router = express.Router();

// GET /api/search?jobType=Plumber&lga=Ikeja
router.get('/', search);

export default router;
