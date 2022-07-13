const express = require('express');
const router = express.Router();


const CustomerController = require("../controllers/customer.controller");

const CustomerController = new CustomerController();

router.get("/protected", (req, res) => {
    return res.send("You have called a protected route");
});


router.post("/protected/onboard", CustomerController.onboard);

module.exports = router;