const categoryService = require('../services/category.service');
class CategoryController {
    //POST owner/category/
    async add(req, res) {
        const {name, description} = req.body;
        let result = {
            message: null,
            status: null,
            data: null,
        };
        if (!name || !description) {
            res.status(400); 
            return res.json({ message: "Incomplete input fields"})
        }
        try {
            const data = await categoryService.add(name, description); 
            result.message = "New category added";
            result.status = 200; 
            result.data = data; 
        } catch (error) {
            res.message = error.message;
            res.status = 400;
        } finally {
            return res.json(result); 
        }
    }
    //DELETE owner/category/:id
    async delete(id) {
        const id = req.params.id; 
        let result = {
            message: null,
            status: null,
            data: null,
        };
        try {
            const data = await categoryService.delete(id); 
            result.message = "Category deleted"; 
            result.status = 200; 
            result.data = data;
        } catch (error) {
            result.message = error.message;
            result.status = 400;
        } finally {
            return res.json(result); 
        }
    }
}