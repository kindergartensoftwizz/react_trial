const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


// Initialize express
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/logintest'; // Change to your MongoDB URI
mongoose.connect(mongoURI, { dbName:"dblogintest" })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));





  // Dummy user data (for demonstration purposes)
const users = [
  {
    id: 1,
    username: "TestAdmin",
    email: "test@example.com",
    password: "$2b$10$9uMTgDxu3rvFQnYOu1GbD.FawpkeimsEfKHsbGYYUWB2Yf6hmNx0u", // hashed "password123"
  },
];
// const plainPassword="password123";
// bcrypt.hash(plainPassword, 10)
//   .then((hashedPassword) => {
//     console.log('Newly hashed password:', hashedPassword);
//   });

// Secret key for JWT (store this securely in real applications)
const JWT_SECRET = "ABCwerty8379438";

// API route for login
app.post("/login", async (req, res) => {
  
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  // Find the user by email
  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Compare the hashed password with the input password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Create a JWT token
  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
    expiresIn: "1h", // Token expiration (e.g., 1 hour)
  });

  // Return the user data and the token
  res.json({
    data: {
      user: { id: user.id, username: user.username, email: user.email },
    },
    token,
  });
});



// // Define a schema and model for MongoDB
// const Schema = mongoose.Schema;
// const dataSchema = new Schema({
//   name: String,
//   age: Number,
//   email: String
// });
// const Data = mongoose.model('Data', dataSchema);

// // Create a route to insert data
// app.post('/api/insertData', (req, res) => {
//   const { name, age, email } = req.body;

//   const newData = new Data({
//     name,
//     age,
//     email
//   });

//   newData.save()
//     .then(() => res.json({ message: 'Data inserted successfully' }))
//     .catch((err) => res.status(500).json({ message: 'Failed to insert data', error: err }));
// });

// Start server
const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
