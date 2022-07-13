const { Customer } = require("../models/index.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
/* const fs = require("fs"); */

module.exports = {
  register: async (
    firstName,
    lastName,
    email,
    pwd,
    shippingAddress,
    billingAddress,
    contact
  ) => {
    const existingUser = await Customer.findOne({ where: { email: email } });

    if (existingUser) {
      throw new Error(`email ${email} is already registered`);
    }

    bcrypt.hash(pwd, 10, async (err, hash) => {
      if (err) {
        throw new Error(`Hashing error: ${err}`);
      }
      const newUser = await Customer.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        pwd: hash,
        shippingAddress: shippingAddress,
        billingAddress: billingAddress,
        contact: contact,
      });
      return newUser.save();
    });
  },

  login: async (email, pwd) => {
    const user = await Customer.findOne({ where: { email: email } });

    if (!user) {
      throw new Error(`Email ${email} does not exist`);
    }

    const pwdMatch = await bcrypt.compare(pwd, user.pwd);

    if (!pwdMatch) {
      throw new Error("Password does not match");
    }

    if (pwdMatch) {
      const loginData = {
        id: user.id,
        email: user.email,
      };

      const token = jwt.sign(loginData, process.env.TOKEN_KEY, {
        expiresIn: "2h",
      });
      console.log(token);
      return token;
    }
  },
};
