const express = require('express');
const publicRoutes = require('./public.routes'); 
const app = express();

app.use(express.json()); 
app.use(publicRoutes);

module.exports = app; 