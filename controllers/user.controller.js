const userService = require("../services/user.service");

class UserController {

	async register(req, res) {

		const {firstName, lastName, email, pwd, shippingAddress, billingAddress, contact} = req.body;

		if (!firstName || !req.body.email || !req.body.pwd || !req.body.shippingAddress || !req.body.billingAddress || !req.body.contact )
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
			const data = await userService.register(req.body.email, req.body.pwd);
			result.message = "New user registration successful";
			result.status = 200;
			result.data = data;
		} catch (err) {
			result.message = error.message;
			result.status = 400;
		} finally {
			return res.json(result);
		}
	}

	async login(req, res) {
		const { email, password } = req.body;
		if (!(email && password && email.trim().length > 0 && password.trim().length > 0)) {
			return res.status(400).json({ message: "Email and password required" });
		}
		try {
			const result = await userService.login(email.trim().toLowerCase(), password);

			res.status(result.status);
			res.json({ data: result.data, message: result.message });
		} catch (err) {
			console.log("login controller error caught", err);
			return res.status(400).json({ message: err });
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