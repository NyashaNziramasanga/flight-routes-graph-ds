const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Students Model
// const Students = require('./models/Students');
const Airports = require('./models/Airport');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Connect to MongoDB
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Retrieves all airport from mongoDB
app.get('/airport', (req, res) => {
  Airports.find().then((airport) => {
    res.send({
      success: true,
      airport: airport,
    });
  });
});

// Create a airport in mongoDB
app.post('/airport', (req, res, next) => {
  // TODO: Error check for duplicates
  //  Airports.findOne({ airport: req.body });

  Airports.create(req.body).then((airport) => {
    res.send({
      success: true,
      airport: airport,
    });
  });
});

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
