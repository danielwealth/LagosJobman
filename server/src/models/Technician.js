// server/src/models/Technician.js
import mongoose from 'mongoose';

const technicianSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: true, // make required if every technician must provide it
    trim: true
  },
  message: {
    type: String,
    default: '',
    trim: true
  },
  jobType: {
    type: String,
    required: true
  },
  lga: {
    type: String,
    required: true
  },
  available: {
    type: Boolean,
    default: true
  },
  faceImage: {
    type: String, // store URL path like "/uploads/..."
    default: null
  },
  workImage: {
    type: String, // store URL path like "/uploads/..."
    default: null
  }
}, { timestamps: true });

export default mongoose.model('Technician', technicianSchema);
