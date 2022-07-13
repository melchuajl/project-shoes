const productService = require('../services/product.service');

class ProductController {

    //POST owner/product
    async add(req, res) {

        const { name, description, sku, image, categoryId, remainingInventory, price } = req.body;

        let result = {
            message: null,
            status: null,
            data: null,
        };

        if (!name || !description || !sku || !image || !categoryId || !remainingInventory || !price) {
            res.status(400);
            return res.json({ message: "Incomplete input fields" })
        }

        try {
            const data = await productService.add(name, description, sku, image, categoryId, remainingInventory, price);
            result.message = "New product added!";
            result.status = 200;
            result.data = data;
        } catch (error) {
            res.message = error.message;
            result.status = 400;
        } finally {
            return res.json(result);
        }
    }

    //PUT owner/product/:id
    async update(req, res) {

        const { id, name, description, sku, image, categoryId, remainingInventory, price } = req.body;

        let result = {
            message: null,
            status: null,
            data: null,
        };

        if (!id) {
            res.status(400);
            return res.json({ message: "ID field cannot be empty" })
        }

        if (typeof id !== "number" || typeof name !== "string" || typeof description !== "string" || typeof sku !== "string" || typeof image !== "string" || typeof categoryId !== "number" || typeof remainingInventory !== "numer" || typeof price !== "string") {
            res.status(400);
            return res.json({ message: "Incorrect request data" })
        }

        try {
            const data = await productService.update(id, name, description, sku, image, categoryId, remainingInventory, price);
            result.message = "Product updated";
            result.status = 200;
            result.data = data;
        } catch (error) {
            res.message = error.message;
            result.status = 400;
        } finally {
            return res.json(result);
        }

    }

    //DELETE owner/product/:id 
    async delete(req, res) {

        const id = req.params.id;

        let result = {
            message: null,
            status: null,
            data: null,
        };

        try {
            const data = await productService.delete(id);
            result.message = "Product deleted";
            result.status = 200;
            result.data = data;
        } catch (error) {
            res.message = error.message;
            result.status = 400;
        } finally {
            return res.json(result);
        }

    }

    //GET public/products/:categoryId
    async display(req, res) {

        const categoryId = req.params.categoryId;

        let result = {
            message: null,
            status: null,
            data: null,
        };

        try {
            const data = await productService.display(categoryId);
            result.message = "Displaying products";
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

module.exports = ProductController; 