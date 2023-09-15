const { User } = require('../models');
const { compareHash } = require('../helpers/bcrypt');
const { createToken, verifyToken } = require('../helpers/jwt');

class UserController {
    static async register(req, res, next) {
        try {
            let { username, email, password } = req.body;
            let userCreated = await User.create({username, email, password, role: "user"});
            const payload = {
                id: userCreated.id
            }
            const access_token = createToken(payload);
            res.status(201).json({id: userCreated.id, email, access_token});
        } catch(error) {
            next(error);
        }
    }

    static async login(req, res, next) {
        try {
            let { email, password } = req.body;
            let userFind = await User.findOne({
                where: {email}
            });
            if(!userFind) {
                throw {name: 'Invalid email/password'};
            }
            const passwordValidation = compareHash(password, userFind.password);
            if(!passwordValidation) {
                throw {name: 'Invalid email/password'};
            }
            const payload = {
                id: userFind.id
            }
            const access_token = createToken(payload);
            res.status(200).json({access_token});
        } catch(error) {
            next(error);
        }
    }

    static async readUser(req, res, next) {
        try {
            let access_token = req.headers.access_token;
            if(!access_token) {
                throw {name: 'Unauthorized'};
            }
            let payload = verifyToken(access_token);
            let user = await User.findByPk(payload.id);
            if(!user) {
                throw {name: 'Unauthorized'};
            }
            res.status(200).json(user.username);
        } catch(error) {
            next(error);
        }
    }
}

module.exports = UserController;