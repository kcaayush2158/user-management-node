const db = require("../models");
const Roles = db.Roles;
const User = db.user;

checkExistedUser = (req, res, next) => {
    const email = req.body.email;

    const user = User.findOne({ where: { email: email } });
    if (user != null) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
    }
    
    next();
}


checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
      for (const element of req.body.roles) {
        if (!ROLES.includes(element)) {
          res.status(400).send({
            message: "Failed! Role does not exist = " + element
          });
          return;
        }
      }
    }
    
    next();
  };

  const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkExistedUser,
    checkRolesExisted: checkRolesExisted
  };
  
  module.exports = verifySignUp;