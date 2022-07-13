const Customer = require("../models/user.index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
/* const fs = require("fs"); */


module.exports = {
	register: async (firstName, lastName, email, pwd, shippingAddress, billingAddress, contact) => {
		const result = {
			status: null,
			message: null,
			data: null,
		};

		const existingUser = await Customer.findone({where : {email: email}});

		if (existingUser) {
			throw new Error (`email ${email} is already registered`);
		}

		bcrypt.hash(pwd, 10, (err,hash) => {
			let newUser;
			if (err) {
				throw new Error(`Hashing error: ${err}`);
			}
			newUser = Customer.create({
				firstName: firstName,
				lastName: lastName,
				email: email,
				pwd: hash,
				shippingAddress: shippingAddress,
				billingAddress: billingAddress,
				contact: contact		
			});
			return newUser.save();
		});
	},

	login: async (email, pwd) => {
		const result = {
			status: null,
			message: null,
			data: null,
		};
		try {
			let user = await Customer.findOne({ where: { email: email } });

			if (user && (await bcrypt.compare(pwd, user.pwd))) {
				// Create token
				const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY, {
					expiresIn: "2h",
				});
				// save user token
				user.token = token;

				result.status = 200;
				result.message = "Login successful";
				result.data = user;
				return result;
			}
			result.status = 400;
			result.message = "Invalid credentials";
			return result;
		} catch (err) {
			console.log("user login error caught", err);
		}
	},

	
};