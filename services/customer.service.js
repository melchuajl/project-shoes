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

    // update: async (id, firstName, lastName, email, shippingAddress, billingAddress, contact) => {

    //     const customerToUpdate = await Customer.findOne({ where: { id: id } });

    //     if (!customerToUpdate) {
    //         throw new Error('Account not found');
    //     }
    //     // customerToUpdate.email = email;
    //     // customerToUpdate.firstName = firstName;
    //     // customerToUpdate.lastName = lastName;
    //     // customerToUpdate.shippingAddress = shippingAddress;
    //     // customerToUpdate.billingAddress = billingAddress;
    // //     customerToUpdate.contact = contact;
    // //     // customerToUpdate.contact = contact;

    //     await customerToUpdate.save();
    //     return customerToUpdate;
    // },

    update: async (id, firstName, lastName, shippingAddress, billingAddress, contact) => {

        const customerToUpdate = await Customer.findOne({ where: { id: id } });

        if (!customerToUpdate) {
            throw new Error('Account not found');
        }

        if (firstName) customerToUpdate.firstName = firstName;
        if (lastName) customerToUpdate.lastName = lastName;
        if (shippingAddress) customerToUpdate.shippingAddress = shippingAddress;
        if (billingAddress) customerToUpdate.billingddress = billingAddress;
        if (contact) customerToUpdate.contact = contact;

        await customerToUpdate.save();
        return customerToUpdate;
    },


    delete: async (email) => {

        const customerToDelete = await Customer.findByPk(email);

        await customerToDelete.destroy();
        return customerToDelete;
    },

    display: async () => {

        const customer = await Customer.findAll();
        return customer;
    },

}