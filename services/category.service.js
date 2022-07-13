const { Category } = require('../models/index'); 
module.exports = {
    add: async (name, description) => {
        const existingCategory = await Category.findOne({where: {name: name}});
        if (existingCategory) {
            throw new Error(`Category "${name}" already exists`);
        }
        await newCategory.create({
            name: name, 
            description: description
        })
    }, 
    delete: async (id) => {
        const categoryToDelete = await Category.findByPk(id); 
        if (!categoryToDelete) {
            throw new Error(`Category ID ${id} does not exist`); 
        }
        await categoryToDelete.destroy(); 
        return categoryToDelete; 
    }
}