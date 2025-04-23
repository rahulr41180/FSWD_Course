
import express from 'express';
import dotenv from 'dotenv';
const app = express();

// Load env variables
dotenv.config();

// Import routes
import processInfoRoute from './routes/processInfo.route.js';

// Middleware
app.use(express.json());

// Routes
app.use('/', processInfoRoute);

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});