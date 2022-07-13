const express = require('express'); 
const userRoutes = require('./user.routes');
const app = express();

app.use(express.json()); 
app.use(userRoutes);

module.exports = app; 