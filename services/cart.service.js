const { Cart } = require("../models/");

module.exports = {
    add: async (productID, quantity) => {

        const existingProduct = await Cart.findOne({ where: { productID: productID } });

        // If product already exists in cart, only quantity will be changed
        if (existingProduct) {
            existingProduct.quantity += quantity;
            existingProduct.save();
        }

        // If product not found, create new cart item
        if (!existingProduct) {
            const newProduct = await Cart.create({
                productID: productID,
                quantity: quantity
            });
            return newProduct.save();
        }
    },

    display: async () => {

        const cart = await Cart.findAll();
        return cart;
    },

    edit: async (productID, quantity) => {

        const editProduct = await Cart.findOne({ where: { productID: productID } });

        if (editProduct) {
            editProduct.quantity = quantity;
            editProduct.save();
        } 

    },

    delete: async (productID) => {

        const deleteProduct = await Cart.findOne({ where: { productID: productID } });

        await deleteProduct.destroy();
        return deleteProduct;
    }
}