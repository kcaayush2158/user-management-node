const db = require('../models');
const OP = db.sequelize.OP;
const UserInformation = db.UserInformation;

exports.create = (req, res) => {

    const data = db.Sequelize.UserInformation.create(req.body.userId);
    res.json({ data: data });
}

exports.findAll = (req, res) => {
    const data = db.userInformation.findAll({});
    res.json({ data: data });
}

exports.update = (req, res) => {

    const data = db.userInformation.update(req.body, { where: { id: id } });
    res.json({ data: data });
}

exports.delete = (req, res) => {
    db.userInformation.delete({}, { where: { id: id } });
    res.status(200).json({ message: 'User deleted successfully' });
}