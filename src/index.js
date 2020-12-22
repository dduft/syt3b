const express = require('express');
const path = require('path');
const members = require('../Members');

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Members API Routes
app.get('/api/members', (req, res) => res.json(members))

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.listen(SERVER_PORT, () => console.log(`Server started on port ${SERVER_PORT}`));