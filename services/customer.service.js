const { Customer } = require('../models/index');

module.exports = {

    add: async (firstName, lastName, email, pwd, shippingAddress, billingAddress, contact) => {

        const existingCustomer = await Customer.findOne({ where: { email: email } });

        if (existingCustomer) {
            throw new Error('Account already exists');
        }

        const newCustomer = await Customer.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            pwd: pwd,
            shippingAddress: shippingAddress,
            billingAddress: billingAddress,
            contact: contact
        });
        return newCustomer.save();
    },

    update: async (firstName, lastName, email, pwd, shippingAddress, billingAddress, contact) => {

        const customerToUpdate = await Customer.findByPk(email);

        if (!customerToUpdate) {
            throw new Error('Account not found');
        }

        customerToUpdate.firstName = firstName;
        customerToUpdate.lastName = lastName;
        customerToUpdate.pwd = pwd;
        customerToUpdate.shippingAddress = shippingAddress;
        customerToUpdate.billingAddress = billingAddress;
        customerToUpdate.contact = contact;

        await customerToUpdate.save();
        return customerToUpdate;
    },

    delete: async (email) => {

        const customerToDelete = await Customer.findOne({ where: { email: email } });

        await customerToDelete.destroy();
        return customerToDelete;
    },

    //GET /protected/user/:id
    display: async (id) => {

        const customer = await Customer.findByPk(id);
        const infoToDisplay = {
            firstName: customer.firstName, 
            lastName: customer.lastName, 
            email: customer.email, 
            shippingAddress: customer.shippingAddress, 
            billingAddress: customer.billingAddress,
            contact: customer.contact
        }
        return infoToDisplay;
    }
}