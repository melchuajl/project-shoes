const express = require('express');
const app = express();
app.use(express.json()); 

//IMPORT ROUTES
const publicRoutes = require('./public.routes'); 
const protectedRoutes = require('./protected.routes'); 

//CONFIGURE ROUTES
app.use(publicRoutes);
app.use(protectedRoutes); 

module.exports = app; 