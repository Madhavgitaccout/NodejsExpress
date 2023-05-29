// index.js
const express = require('express');
const app = express();
const port = 8000;

// Import the MongoDB connection and the Admission model
const mongoose = require('./models/db');
const Admission = require('./models/db');

app.set('view engine', 'ejs'); // Set EJS as the template engine
app.use(express.urlencoded({ extended: false }));

// Import the router
const router = require('./routes/index');

// Use the router for all routes
app.use('/', router);

app.post('/submit', (req, res) => {
    // Create a new admission instance with the submitted data
    const admission = new Admission({
      name: req.body.name,
      email: req.body.email,
      course: req.body.course
    });
  
    // Save the admission to the database
    admission.save()
      .then(() => {
        res.send('Admission submitted successfully');
      })
      .catch(err => {
        res.send('Error submitting admission');
        console.error(err);
      });
  });

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
