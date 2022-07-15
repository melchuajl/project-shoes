const customerService = require('../services/customer.service');

class CustomerController {

    async add(req, res) {

        const { firstName, lastName, email, pwd, shippingAddress, billingAddress, contact } = req.body;

        let result = {
            message: null,
            status: null,
            data: null,
        };

        if (!firstName || !lastName || !email || !pwd || !shippingAddress || !billingAddress || !contact) {
            res.status(400);
            return res.json({ message: "Incomplete input fields, please check again" })
        }

        try {
            const data = await customerService.add(firstName, lastName, email, pwd, shippingAddress, billingAddress, contact);
            result.message = "Account created successfully!";
            result.status = 200;
            result.data = data;
        } catch (error) {
            result.message = error.message;
            result.status = 400;
        } finally {
            return res.json(result);
        }
    }


    async update(req, res) {

        const id = req.params.id;
        const { firstName, lastName, shippingAddress, billingAddress, contact } = req.body;

        let result = {
            message: null,
            status: null,
            data: null,
        };

        try {
            const data = await customerService.update( id, firstName, lastName, shippingAddress, billingAddress, contact);
            result.message = "Account details updated";
            result.status = 200;
            result.data = data;
        } catch (error) {
            result.message = error.message;
            result.status = 400;
        } finally {
            return res.json(result);
        }

    }

    async delete(req, res) {

        const id = req.params.id;

        let result = {
            message: null,
            status: null,
            data: null,
        };

        try {
            const data = await customerService.delete(id);
            result.message = "Account deleted";
            result.status = 200;
            result.data = data;
        } catch (error) {
            result.message = error.message;
            result.status = 400;
        } finally {
            return res.json(result);
        }

    }

    async display(req, res) {

        let result = {
            message: null,
            status: null,
            data: null,
        };

        try {
            const data = await customerService.display();
            result.message = "Displaying all customers profiles!";
            result.status = 200;
            result.data = data;
        } catch (error) {
            result.message = error.message;
            result.status = 400;
        } finally {
            return res.json(result);
        }
    }

    async displayOne(req, res) {

        const id = req.params.id;

        let result = {
            message: null,
            status: null,
            data: null,
        };

        try {
            const data = await customerService.displayOne(id);
            result.message = "Displaying customer profile!";
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

module.exports = CustomerController;