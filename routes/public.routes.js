const express = require('express');
const router = express.Router();

router.get("/public", (req, res) => {
    return res.send("You have called a public route");
});

const ProductController = require('../controllers/product.controller');
const productController = new ProductController();

router.get("/public/products/:categoryId", productController.display);

//JUST FOR TESTING PLEASE DELETE
// router.post("/public/products/", productController.add);

module.exports = router; 