

module.exports = (sequelize, Sequelize) => {
   const User =  sequelize.define('user', {
        firstName: {
            type: Sequelize.STRING,
            defaultValue: false
        },
        lastName: {
            type: Sequelize.STRING,
            defaultValue: false
        },
    
        email: {
            type: Sequelize.STRING,
            defaultValue: false,
        },
        password: {
            type: Sequelize.STRING,
            defaultValue: false
        },
    }, {
        timestamps: false,
    });
return User;

}




