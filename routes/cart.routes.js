const express = require('express');
const router = express.Router();

//Import
const CartController = require("../controllers/cart.controller");
// Instantiate the class
const cartController = new CartController();

router.get("/cart", (req, res) => {
    return res.send("You have called a cart route");
});

router.post("/cart", cartController.add);

module.exports = router;