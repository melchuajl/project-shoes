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
            res.message = error.message;
            result.status = 400;
        } finally {
            return res.json(result);
        }
    }


    async update(req, res) {

        const { id, firstName, lastName, email, pwd, shippingAddress, billingAddress, contact } = req.body;

        let result = {
            message: null,
            status: null,
            data: null,
        };

        if (!id) {
            res.status(400);
            return res.json({ message: "ID field cannot be empty" })
        }

        if (typeof id !== "number" || typeof firstName !== "string" || typeof lastName !== "string" || typeof email !== "string" || typeof pwd !== "string" || typeof shippingAddress !== "string" || typeof billingAddress !== "string" || typeof contact !== "number") {
            res.status(400);
            return res.json({ message: "Incorrect request data" })
        }

        try {
            const data = await customerService.update(firstName, lastName, email, pwd, shippingAddress, billingAddress, contact);
            result.message = "Account details updated";
            result.status = 200;
            result.data = data;
        } catch (error) {
            res.message = error.message;
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
            res.message = error.message;
            result.status = 400;
        } finally {
            return res.json(result);
        }

    }

    async display(req, res) {

        const id = req.params.id;

        let result = {
            message: null,
            status: null,
            data: null,
        };

        try {
            const data = await customerService.display(id);
            result.message = "Displaying all customers";
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