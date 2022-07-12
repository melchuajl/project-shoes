const Cart = require("../models/cart.model");

module.exports = {
    add: async(productID, quantity) => {
        let result = {
            message: null,
            status: null,
            data: null,
          };      

        const CartItem = await Cart.create({
            productID: productID,
            quantity: quantity
        });

        await CartItem.save();
        result.data = newReview;
        result.status = 200;
        result.message = "Added!!!";
        return result;
    }
}