// app.js

const express = require('express');
const bodyParser = require('body-parser');
const task = require('./routes/task.route'); // Imports routes for the products


// initialize our express app
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://test:Test123@ds219672.mlab.com:19672/tasks'
//'mongodb://localhost:27017/Tasks';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
// // Retrieve
// var MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
// // Connection URL
// const url = 'mongodb://localhost:27017';
//
// // Database Name
// const dbName = 'Tasks';
//
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/task', task);
let port = 8080;



app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
