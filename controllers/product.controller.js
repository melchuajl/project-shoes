const productService = require('../services/product.service');

class ProductController {

    //POST owner/products
    async add(req, res) {

        const { name, description, sku, image, categoryID, remainingInventory, price } = req.body;

        let result = {
            message: null,
            status: null,
            data: null,
        };

        if (!name || !description || !sku || !image || !categoryID || !remainingInventory || !price) {
            res.status(400);
            return res.json({ message: "Incomplete input fields" })
        }

        try {
            const data = await productService.add(name, description, sku, image, categoryID, remainingInventory, price);
            result.message = "New product added!";
            result.status = 201; // status code for 'Created'
            result.data = data;
        } catch (error) {
            result.message = error.message;
            result.status = 400;
        } finally {
            return res.json(result);
        }
    }

    //PUT owner/products/:id
    async update(req, res) {

        const id = req.params.id;
        const { name, description, sku, image, categoryID, remainingInventory, price } = req.body;

        let result = {
            message: null,
            status: null,
            data: null,
        };

        if (typeof name !== "string" || typeof description !== "string" || typeof sku !== "string" || typeof image !== "string" || typeof categoryID !== "number" || typeof remainingInventory !== "number" || typeof price !== "string") {
            res.status(400);
            return res.json({ message: "Incorrect request data" })
        }

        try {
            const data = await productService.update(id, name, description, sku, image, categoryID, remainingInventory, price);
            result.message = "Product updated";
            result.status = 200;
            result.data = data;
        } catch (error) {
            result.message = error.message;
            result.status = 400;
        } finally {
            return res.json(result);
        }

    }

    //DELETE owner/products/:id 
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
            result.status = 204; 
            result.data = data;
        } catch (error) {
            result.message = error.message;
            result.status = 400;
        } finally {
            return res.json(result);
        }

    }

    //GET public/products/:categoryID
    async display(req, res) {

        const categoryID = req.params.categoryID;

        let result = {
            message: null,
            status: null,
            data: null,
        };

        try {
            const data = await productService.display(categoryID);
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