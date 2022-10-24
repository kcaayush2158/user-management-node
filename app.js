const express = require('express');
require('dotenv').config();
const app = express();
const db = require("./models");
const Role = db.Roles;
const bodyParser = require('body-parser');

//parsing middleware
//parse application/x-wwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//parse application/json
app.use(bodyParser.json());
//static files
app.use(express.static('public'));


db.sequelize.sync({ force: true }).then();

function initialize() {

    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 2,
        name: "moderator"
    });


    Role.create({
        id: 3,
        name: "admin"
    });
}


require("./routes/user.router")(app);
require("./routes/user-information.route")(app);

// set port, listen for requests
const PORT = process.env.PORT || 6200;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});



