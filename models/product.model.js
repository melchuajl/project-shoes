const { DataTypes, Model } = require("sequelize");

module.exports = function (sequelize) {
  class Product extends Model {}

  Customer.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "last_name",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pwd: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shippingAdd: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "shipping_address",
      },
      billingAdd: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "billing_address",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products",
    }
  );

  return Product;
};
