const db = require('../models');
const User = db.user;
const Role = db.role;
const OP = db.sequelize.OP;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { user } = require('../models');
const { where } = require('sequelize');

exports.signup = (req, res, next) => {

    const user = User.create({
        userName: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    });
    if (user != null) {
        if (req.body.roles) {
            const data = Role.findAll({ where: { name: { [Op.or]: req.body.roles } } });
            user.setRoles(data);
            res.send({ message: "User was registered successfully!" });
        } else {
            user.setRoles([1]).then(() => {
                res.send({ message: "User was registered successfully!" });
            });
        }
    } else {
        res.status(500).send({ message: 'Unable to create the user' });
    }
}



exports.login = (req, res) => {
    const user = User.findOne({ where: { email: req.body.email } });
    if (user == null) {
        return res.status(404).send({ message: "User Not found." });
    }

    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
        return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
        });
    }

    let token = jwt.sign({ id: user.id }, config.secret, { expiresIn: '2h' });

    let authorities = [];

    user.getRoles().then(roles => {
        for (const element of roles) {
            authorities.push("ROLE_" + element.name.toUpperCase());
        }
    });

    res.status(200).send({
        id: user.id,
        username: user.username,
        email: user.email,
        roles: authorities,
        accessToken: token
    });




}

