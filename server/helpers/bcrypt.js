const bcrypt = require('bcryptjs');

const hashPassword = (password) => bcrypt.hashSync(password, 10);
const compareHash = (password, userPassword) => bcrypt.compareSync(password, userPassword);

module.exports = {
    hashPassword,
    compareHash
};