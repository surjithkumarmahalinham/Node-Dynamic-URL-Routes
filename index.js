var express = require('express');

var app = express();
var products = require('./routes/products');
var users = require('./routes/users');
const moongose = require('mongoose');//step #1
//step #2 is create the properties file
var dbURL = require('./properties').DB_URL;//

//connection
moongose.connect(dbURL);

moongose.connection.on("connected",()=>{
    console.log("Connected to mongoDB using MongooseJs");
});
var port = process.env.PORT || 4000;

app.use('/products',products);
app.use('/users',users);

app.listen(port);