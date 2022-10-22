const { QueryTypes } = require('sequelize');
const db = require('../models');
const User = db.User;
const userInformation = db.UserInformation;

exports.welcome = (req, res) => {
    res.json({ 'data': 'welcome' });
}

//creates a new user 
exports.createUser = async (req, res) => {
    console.log(req.body)
    const obj = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        userId: {
            id: req.body.userId.id,
            height: req.body.userId.height,
            phone: req.body.userId.weight,
        }
    };
    const data = await User.create(obj)

    if (data) {
        await UserInformation.create(data.userId)
        return res.json(data)
    } else {
        res.status(500).send({ message: err.message || "Some error occurred while creating the tutorial" });
        return res.json({ data: data });
    }
};



exports.findOne = (req, res) => {
    const id = req.params.id;
    const data = db.sequelize.query("SELECT * FROM users  WHERE id = :id", { nest: true, type: QueryTypes.SELECT, replacements: { id: id }, include: db.userInformation })
    res.json(data);
}



exports.findAll = (req, res) => {
    const users = User.findAll()
    if (users) {
        res.status(200).send({ message: 'User created Successfully' })
    } else {
        res.status(500).send({ message: "Some error occurred while creating the tutorial" });
    }
}

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };

