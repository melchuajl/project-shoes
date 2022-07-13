const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.get("/owner", (req, res, next) => {
    return res.send("You have called an owner protected route");
    next();
});

//Products
const ProductController = require('../controllers/product.controller');
const productController = new ProductController();

router.post("/owner/products/", auth.isOwner, productController.add);
router.put("/owner/products/:id", auth.isOwner, productController.update);
router.delete("/owner/products/:id", auth.isOwner, productController.delete);

module.exports = router; 