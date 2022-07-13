const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dcimlucjej1p1k', 'asfaamshpartmm', 'f499ccb40586ea8dd3b08b81019ef57108bcce614b88a1a131c0e7a1aaad35b0', {
    host: 'ec2-3-217-14-181.compute-1.amazonaws.com',
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
const Customer = require('./user.model')(sequelize);

// ASSOCIATIONS

module.exports = {
    sequelize,
    Customer
}