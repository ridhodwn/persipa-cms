const jwt = require('jsonwebtoken');
const THIS_KEY = process.env.JWT_TOKEN;

const createToken = (payload) => jwt.sign(payload, THIS_KEY);
const verifyToken = (token) => jwt.verify(token, THIS_KEY);

module.exports = {
    createToken,
    verifyToken
};