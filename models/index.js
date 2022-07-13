const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    database: 'dcimlucjej1p1k', 
    username: 'asfaamshpartmm', 
    password: 'f499ccb40586ea8dd3b08b81019ef57108bcce614b88a1a131c0e7a1aaad35b0',
    host: 'ec2-3-217-14-181.compute-1.amazonaws.com',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            required: true,
            rejectUnauthorized: false
        }
    }
});

// const sequelize = new Sequelize('lesson_db', 'melissachua', '', {
//     host: 'localhost',
//     dialect: 'postgres'
// })

// IMPORT MODELS
const Product = require('./product.model')(sequelize);
const Category = require('./category.model')(sequelize);
const Cart = require('./cart.model')(sequelize);

// ASSOCIATIONS
Product.belongsTo(Category, {
    foreignKey: "category_id"
});

Cart.belongsTo(Product, {
    foreignKey: "product_id"
})

module.exports = {
    sequelize,
    Product,
    Category,
    Cart
}