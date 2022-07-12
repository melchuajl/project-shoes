const { DataTypes, Model } = require("sequelize");

module.exports = function (sequelize) {
    class Cart extends Model { }

    Cart.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
            },
            productID: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                field: "product_id"
            },
            quantity: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
                autoIncrement: true,
                allowNull: false,
                field: "created_at"
            },
            updatedAt: {
                type: DataTypes.DATE,
                autoIncrement: true,
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