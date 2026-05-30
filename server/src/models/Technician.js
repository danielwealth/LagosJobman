// server/src/models/Technician.js
import mongoose from 'mongoose';

const technicianSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    jobType: {
      type: String,
      required: true,
      enum: [
        'Electrician',
        'Plumber',
        'Bricklayer',
        'Carpenter',
        'Painter',
        'Welder',
        'Mechanic',
        'Tiler',
        'SolarInstaller',
        'Engineer',
        'Cleaner',
        'Labourer',
        'BrickMoulder',
        'HeaterReparer',
        'HomeLessonTeacher',
        'AluminiumMan',
      ],
    },
    lga: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      default: true,
    },
    faceImage: {
      type: String, // store image URL or path
    },
    workImage: {
      type: String, // store image URL or path
    },
  },
  { timestamps: true }
);

const Technician = mongoose.model('Technician', technicianSchema);

export default Technician;
