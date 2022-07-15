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

    update: async (id, firstName, lastName, shippingAddress, billingAddress, contact) => {

        const customerToUpdate = await Customer.findOne({ where: { id: id } });

        if (!customerToUpdate) {
            throw new Error('Account not found');
        }

        if (firstName) customerToUpdate.firstName = firstName;
        if (lastName) customerToUpdate.lastName = lastName;
        if (shippingAddress) customerToUpdate.shippingAddress = shippingAddress;
        if (billingAddress) customerToUpdate.billingAddress = billingAddress;
        if (contact) customerToUpdate.contact = contact;

        await customerToUpdate.save();
        return customerToUpdate;
    },


    delete: async (id) => {

        const customerToDelete = await Customer.findByPk(id);

        await customerToDelete.destroy();
        return customerToDelete;
    },

    display: async () => {

        const customer = await Customer.findAll();
        return customer;
    },

    displayOne: async (id) => {

        const customer = await Customer.findByPk(id);

        if (!customer) {
            throw new Error('Account not found');
        }
        return customer;

    }
}