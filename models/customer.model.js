const { DataTypes, Model } = require("sequelize");

module.exports = function (sequelize) {
  class Customer extends Model {}

  Customer.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "first_name",
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
      shippingAddress: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "shipping_address",
      },
      billingAddress: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "billing_address",
      },
      contact: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: "deleted_at",
      }
    },
    {
      sequelize,
      modelName: "Customer",
      tableName: "customers",
    }
  );

  return Customer;
};