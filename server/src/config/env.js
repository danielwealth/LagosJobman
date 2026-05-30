// server/src/config/env.js
import dotenv from 'dotenv';

dotenv.config();

const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/technician_marketplace',
  JWT_SECRET: process.env.JWT_SECRET || '20ca91b3519528accbbd5e55fcfa7e209ef899cdd8f7ab1c28775ffebf938745862b417d22e52e0c0e0a6524f16e1ecc51e9033a08bf52a3c3326c3e3c8a8a74',
};

export default env;
