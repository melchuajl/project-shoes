const { Product, Category } = require('../models/index');

module.exports = {

    add: async (name, description, sku, image, categoryId, remainingInventory, price) => {

        const existingProduct = await Product.findOne({ where: { sku: sku } });

        if (existingProduct) {
            throw new Error(`Product SKU ${sku} already exists`);
        }

        const newProduct = await Product.create({
            name: name,
            description: description,
            sku: sku,
            image: image,
            categoryId: categoryId,
            remainingInventory: remainingInventory,
            price: price
        });
        return newProduct.save();
    },

    update: async (id, name, description, sku, image, categoryId, remainingInventory, price) => {

        const productToUpdate = await Product.findByPk(id);

        if (!productToUpdate) {
            throw new Error(`Product ID ${id} not found`);
        }

        productToUpdate.name = name;
        productToUpdate.description = description;
        productToUpdate.sku = sku;
        productToUpdate.image = image;
        productToUpdate.categoryId = categoryId;
        productToUpdate.remainingInventory = remainingInventory;
        productToUpdate.price = price;

        await productToUpdate.save();
        return productToUpdate;
    },

    delete: async (id) => {

        const productToDelete = await Product.findByPk(id);

        if (!productToDelete) {
            throw new Error(`Product ID ${id} does not exist`);
        }

        await productToDelete.destroy();
        return productToDelete;
    },

    display: async (categoryId) => {
        const products = await Product.findAll({ where: { categoryId: categoryId }, include: Category });
        return products;
    }
}
