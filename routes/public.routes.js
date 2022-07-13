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

router.get("/public/cart/", cartController.display)
router.post("/public/cart/", cartController.add);
router.put("/public/cart/", cartController.edit);
router.delete("/public/cart/", cartController.delete);

//Users
const UserController = require('../controllers/user.controller');
const userController = new UserController();

router.post('/public/user/register', userController.register);
router.post('/public/user/login', userController.login);
// router.get('/public/user', userController.retrieve);

module.exports = router;