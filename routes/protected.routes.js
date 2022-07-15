const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.get("/protected", (req, res) => {
    return res.send("You have called a protected route");
});

router.get("/protected/owner", (req, res, next) => {
    res.send("You have called an owner protected route");
    next();
});

//Customer
const CustomerController = require("../controllers/customer.controller");
const customerController = new CustomerController();

router.get("/protected/customers/:id" , auth.isLoggedIn, customerController.displayOne);
router.put("/protected/customers/:id", auth.isLoggedIn, customerController.update);
router.delete("/protected/customers/:id", auth.isLoggedIn, customerController.delete);

//Products
const ProductController = require('../controllers/product.controller');
const productController = new ProductController();

router.get("/protected/owner/customers/", auth.isOwner, customerController.display);
router.post("/protected/owner/products/", auth.isOwner, productController.add);
router.put("/protected/owner/products/:id", auth.isOwner, productController.update);
router.delete("/protected/owner/products/:id", auth.isOwner, productController.delete);

module.exports = router;