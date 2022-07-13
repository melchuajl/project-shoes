const userService = require("../services/user.service");

class UserController {

	async register(req, res) {

		const {firstName, lastName, email, pwd, shippingAddress, billingAddress, contact} = req.body;

		if (!firstName || !lastName || !email || !pwd || !shippingAddress || !billingAddress || !contact )
			 {
			res.status(400);
			return res.json({ message: "Please check all input fields" });
		}

		let result = {
			message: null,
			status: null,
			data: null,
		};

		try {
			const data = await userService.register(firstName, lastName, email, pwd, shippingAddress, billingAddress, contact);
			result.message = "New user registration successful";
			result.status = 200;
			result.data = data;
		} catch (err) {
			res.message = error.message;
			res.status = 400;
		} finally {
			return res.json(result);
		}
	}

	async login(req, res) {
		const {email, pwd} = req.body;
		if (!email || !pwd ) {
			res.status(400)
			return res.json({ message: "Email and password required" });
		}

		let result = {
            message: null,
            status: null,
            data: null,
        };

		try {
			const result = await userService.login(email, password);
			result.message = "Login successful";
			result.status = 200;
			result.data = data;

		} catch (err) {
			result.message = error.message;
			result.status = 400;
		} finally {
			return res.json(result);
		}
	}

	async retrieve(req, res) {
        let result = {
            message: null,
            status: null,
            data: null,
        };

        try {
            const data = await userServiceGetAll();
            result.message = "Retrieval successful";
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

module.exports = UserController;