const express = require('express');
const app = express();
app.use(express.json()); 

//IMPORT ROUTES
const publicRoutes = require('./public.routes'); 
<<<<<<< HEAD
const protectedRoutes = require('./protected.routes'); 

//CONFIGURE ROUTES
app.use(publicRoutes);
app.use(protectedRoutes); 
=======

//CONFIGURE ROUTES
app.use(publicRoutes);
>>>>>>> f1a6bf2078bc18c0c6f7297fe481c4d64346ce75

module.exports = app; 