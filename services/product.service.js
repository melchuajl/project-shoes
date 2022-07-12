const Product = require('../models/product.model');

module.exports = {

    add: async (name, description, sku, image, categoryId, quantity, price) => {

        const existingProduct = await Product.findOne({ where: { sku: sku } });

        if (existingProduct) {
            throw new Error(`Product SKU ${sku} has already been added.`);
        }

        await newProduct.create({
            name: name,
            description: description,
            sku: sku,
            image: image,
            categoryId: categoryId,
            quantity: quantity,
            price: price
        });
        return newProduct.save();
    }


}
