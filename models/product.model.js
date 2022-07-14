const { DataTypes, Model } = require("sequelize");

module.exports = function (sequelize) {
  class Product extends Model {}

  Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      sku: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "img_url"
      },
      categoryID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "category_id"
      },
      remainingInventory: {
        type: DataTypes.INTEGER, 
        allowNull: false, 
        field: "inventory"
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at"
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at"
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: "deleted_at"
      }
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products"
    }
  );

  return Product;
};
