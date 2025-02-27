const express = require('express');
const router = express.Router();

router.get("/public", (req, res) => {
    return res.send("You have called a public route");
});

//Products
const ProductController = require('../controllers/product.controller');
const productController = new ProductController();

router.get("/public/products/:categoryId", productController.display);

//Cart
const CartController = require("../controllers/cart.controller");
const cartController = new CartController();

router.get("/public/cart/:id", cartController.display)
router.post("/public/cart/", cartController.add);

module.exports = router; 