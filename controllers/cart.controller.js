const cartService = require("../services/cart.service");

class CartController {
    // POST
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

        let result = {
            message: null,
            status: null,
            data: null,
        };

        try {
            const data = await cartService.display()
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

    //Edit
    async edit(req, res) {

        const { productID, quantity } = req.body;

        let result = {
            message: null,
            status: null,
            data: null,
        };

        try {
            const data = await cartService.edit(productID, quantity);
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
    //DELETE
    async delete(req, res) {

        const { productID } = req.body;

        let result = {
            message: null,
            status: null,
            data: null,
        };

        try {
            const data = await cartService.delete(productID)
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
}

module.exports = CartController;