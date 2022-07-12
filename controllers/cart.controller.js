const cartService = require("../services/cart.service");

class CartController {
    // POST /cart
    async add(req, res) {

        const { productID, quantity } = req.body;

        if (!productID || !quantity) {
            res.status(400);
            return res.json({ message: "Cart is empty" });
        }

        const result = await cartService.add(productID, quantity);
        res.status(result.status);

        // Return results from service
        return res.json({ data: result.data, message: "Product added to cart!" });
    }
}

module.exports = CartController;