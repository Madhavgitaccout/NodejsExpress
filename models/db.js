const mongoose = require('mongoose');


// MongoDB connection URL
const mongoURI = 'mongodb://localhost:27017/myapp';

// Establish MongoDB connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

module.exports = mongoose;
