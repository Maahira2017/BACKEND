// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://maahirajasmin6:YCiRkvYHorkSLfAC@cluster0.lyvwj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(() => {
	console.log('Connected to MongoDB Atlas');
}).catch(err => {
	console.log('Error connecting to MongoDB:', err);
});


// Routes
app.use('/api/events', eventRoutes);

// Start server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});