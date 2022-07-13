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

    // GET
    async display(req, res) {

        const cartDisplay = req.params.id;

        let result = {
            message: null,
            status: null,
            data: null,
        };

        try {
            const data = await cartService.display(cartDisplay)
            result.message = "Displaying cart";
            result.status = 200;
            result.data = data;
        } catch (error) {
            result.message = error.message;
            result.status = 400;
        } finally {
            return res.json(result);
        }
    }

    async delete(req, res) {

        const { productID, quantity } = req.body;

        let result = {
            message: null,
            status: null,
            data: null,
        };

        try {
            const data = await cartService.delete(productID, quantity);
            result.status = 200;
            result.message = "Product deleted from cart!"
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