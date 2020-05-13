const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Connect to MongoDB
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Import Routes
const airportRoutes = require('./routers/airportRoutes');
const routesRoutes = require('./routers/routesRoutes');

// Mount routes
app.use('/airport', airportRoutes);
app.use('/routes', routesRoutes);

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () =>
  console.log(` 🔥Server running on port ${PORT}🔥 `)
);

// Handle unhandled promises
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server
  server.close(() => process.exit);
});
