module.exports = (sequelize, Sequelize) => {

    const UserInformation = sequelize.define('user-informations', {
        height: {
            type: Sequelize.STRING,
            defaultValue: false
        },
        hair: {
            type: Sequelize.STRING,
            defaultValue: false
        },

        phone: {
            type: Sequelize.INTEGER,
            defaultValue: false
        },


    }, {
        timestamps: false,
    });
    return UserInformation;

}
