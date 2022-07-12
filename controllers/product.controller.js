const productService = require('../services/product.service');

class ProductController {

    //POST /products
    async add(req, res) {

        const { name, description, sku, image, categoryId, quantity, price } = req.body;
        if (!name || !description || !sku || !image || !categoryId || !quantity || !price) {
            res.status(400);
            return res.json({ message: "Incomplete input fields, please check again" })
        }

        try {
            const result = await productService.add(name, description, sku, image, categoryId, quantity, price);
            res.status(result.status);
            return res.json({ data: result.data, message: "New product added successfully!" })
        } catch (error) {
            res.message = error.message;
            return res.status(400).json({ message: error });
        }
    }

    //DELETE /products/:id 
    async remove(req, res) {
        return true
    }
}

module.exports = ProductController; 