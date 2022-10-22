const express = require('express');
require('dotenv').config();
const app = express();
const db = require('./server/models');
const Role = db.Roles;
const bodyParser = require('body-parser');

//parsing middleware
//parse application/x-wwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//parse application/json
app.use(bodyParser.json());
//static files
app.use(express.static('public'));


db.sequelize.sync({ force: true }).then(() => initialize());

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


require("./server/routes/user.router")(app);
require("./server/routes/user-information.route")(app);

app.listen(6200);



