const express = require("express");
const app = express();
app.use(express.json()); // Enable express to parse JSON as request body.
const cartRoutes = require("./cart.routes");

app.use(cartRoutes);

module.exports = app;