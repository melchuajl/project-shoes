const { DataTypes, Model } = require("sequelize");

module.exports = function (sequelize) {
    class Cart extends Model { }

    Cart.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            productID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "product_id"
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
                field: "created_at"
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
                field: "updated_at"
            }
        },
        {
            sequelize,
            modelName: "Cart",
            tableName: "cart_items",
        }
    );

    return Cart;
};