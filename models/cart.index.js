const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("dcimlucjej1p1k", "asfaamshpartmm", "f499ccb40586ea8dd3b08b81019ef57108bcce614b88a1a131c0e7a1aaad35b0", {
  host: "ec2-34-239-241-121.compute-1.amazonaws.com",
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      required: true,
      rejectUnauthorized: false
    }
  }
});

// Test Connection Function
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

// Import Models
const Cart = require('./cart.model')(sequelize);
const Product = require('./product.model')(sequelize);

Cart.belongsTo(Product, {
  foreignKey: "product_id"
})

module.exports = {
  sequelize,
  testConnection,
  Cart,
  Product
}