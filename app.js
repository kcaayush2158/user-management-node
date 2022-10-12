const express = require('express');
const app = express();

const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');

require('dotenv').config();


//parsing middleware
//parse application/x-wwww-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));
//parse application/json
app.use(bodyParser.json());
//static files
app.use(express.static('public'));

//template Engine 
app.engine('hbs' ,engine({ extname:'.hbs' }));
app.set('view engine','hbs');

app.get('', (req, res) => {

    
  res.render('home');
});


app.listen(6200);



