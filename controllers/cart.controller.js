const cartService = require("../services/cart.service");

class CartController {
    // POST /cart
    async add(req, res) {

        const { productID, quantity } = req.body;

        let result = {
            message: null,
            status: null,
            data: null,
        };

        if (!productID || !quantity) {
            res.status(400);
            return res.json({ message: "Invalid input fields" });
        }

        try {
            const data = await cartService.add(productID, quantity);
            result.status = 200;
            result.message = "Product added to cart!"
            result.data = data;
        } catch (error) {
            result.status = 400; 
            res.message = error.message;
        } finally {
            return res.json(result); 
        }

    }
}

module.exports = CartController;