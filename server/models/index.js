
const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
});

db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.userInformation = require('./user-information.model')(sequelize, Sequelize);
db.user = require('./user.model')(sequelize, Sequelize);
db.Roles = require('./user.model')(sequelize, Sequelize);

db.Roles.belongsToMany(db.user,{
    through:"user_roles",
    foreignKey:"roleId",
    otherKey:"userId"

});

db.user.belongsToMany(db.Roles,{
    through:"user_roles",
    foreignKey:"userId",
    otherKey:"roleId"
});

db.Roles = ["user","admin","moderator"];


db.userInformation.hasOne(db.user);
db.user.belongsTo(db.userInformation,{
    foreignKey: "userId",
    as : "user",
});

module.exports = db;
