const jwt = require('jsonwebtoken');
require('dotenv').config();
const privateKey = process.env.TOKEN_KEY;

module.exports = {

    isLoggedIn: async (req, res, next) => {

        const authHeader = req.headers['authorization'];
        const token = authHeader.split(' ')[1];

        if (!token) {
            res.status(401); // status code for 'Authentication required'
            return res.json({ message: "Please log in" });
        }

        jwt.verify(token, privateKey, (error, user) => {
            if (error) {
                res.status(401);
                return res.json({ message: "Invalid token, please log in again" });
            }
            req.user = user;
            return next();
        })
    },

    isOwner: async (req, res, next) => {

        if (req.user.role.toLowerCase() !== 'owner') {
            res.status(403); // status code for 'Forbidden'
            return res.json({ message: "Owner access only" })
        }
        next();
    }
}