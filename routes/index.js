const express = require('express');
const app = express();
app.use(express.json()); 

//IMPORT ROUTES
const publicRoutes = require('./public.routes'); 

//CONFIGURE ROUTES
app.use(publicRoutes);

module.exports = app; 