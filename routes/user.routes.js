const express = require('express');
const UserController = require('../controllers/user.controller');
const userRoutes = express.Router();

const userController = new UserController();
userRoutes.post('/user/register', userController.register);
userRoutes.post('/user/login', userController.login);
userRoutes.get('/user', userController.retrieve);

module.exports = userRoutes;