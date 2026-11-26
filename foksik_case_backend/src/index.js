import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

// Load env vars
dotenv.config();

const app = express();

// Middleware
app.disable('x-powered-by');
app.use(cors());
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Foksik Case Backend API' });
});

app.use('/api/users', userRoutes);

// Unknown route
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  const status = Number(err.status) >= 400 && Number(err.status) < 500 ? Number(err.status) : 500;
  if (status >= 500) console.error(err.stack);
  res.status(status).json({
    success: false,
    error: status === 400 ? 'Invalid request body' : 'Something went wrong!',
  });
});

const PORT = Number(process.env.PORT) || 3000;

const startServer = async () => {
  await connectDB();

  const server = app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  });

  const shutdown = async (signal) => {
    console.log(`${signal} received, shutting down`);
    server.close(async () => {
      await mongoose.disconnect();
      process.exit(0);
    });
  };

  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));
};

startServer().catch((error) => {
  console.error(`Failed to start server: ${error.message}`);
  process.exit(1);
});

export default app;
