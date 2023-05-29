const mongoose = require('./db');

// Define the admission schema
const admissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  }
});

console.log('Mongodb serveris workng fine');

// Create the admission model
const Admission = mongoose.model('Admission', admissionSchema);

module.exports = Admission;
