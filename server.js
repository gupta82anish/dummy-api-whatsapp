var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3030;

var router = express.Router();

require('./app/routes/mock.routes.js')(app);

app.get('/',(req, res)=> res.json({message:"Welcome to the screening!"}));


app.listen(port);
console.log("Server started at "+port);
