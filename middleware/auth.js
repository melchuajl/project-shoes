const jwt = require('jsonwebtoken');
require('dotenv').config();
const privateKey = process.env.JWT_SECRET_KEY; 

module.exports = {

    isLoggedIn: async (req, res, next) => {

        const token = req.headers.token;

        if (!token) {
            res.status(401); // status code for 'Unauthorised: authentication required'
            return res.json({ message: "Please log in"});
        }

        jwt.verify(token, privateKey, (error, user) => {
            if (error) {
                res.status(401).send({ message: "Session has expired"}); 
                console.log(error)
            }
            req.user = user; 
            next(); 
        })
    },

    isOwner: async (req, res, next) => {

        if(req.user.role.toLowerCase() !== 'owner') {
            res.status(403); // status code for 'Forbidden'
            return res.json({ message: "Owner access only"})
        }
        next(); 
    }
}