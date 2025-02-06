import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { connectDB } from './config/database';

const app = express();

// Basic middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// DB connection on app startup
connectDB();

// Test routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});



export default app;
