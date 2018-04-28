// const AWS = require('aws-sdk');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const path = require("path");
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

//setting up npm
const app = express();

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.use(session({
    secret: process.env.SESSIONSECRET || "Coding is fun!",
    resave: false,
    saveUninitialized: true
}));

function userSetup(req, res, next) {
    if (!req.session.user) {
        console.log("Hit user setup");
        req.session.user = {
            id: null,
            username: '',
            email: '',
            imgUrl: null,
            loggedIn: false,
            isAdmin: false,
            bucket: "",
            region: ""
        }
    }
    next()
}

app.use(userSetup);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require('./routes/api-routes')(app);
require('./routes/s3-routes')(app);

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/users';

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI).then(()=>{
    console.log("mongoose DB connected");

    app.listen(PORT, function () {
        console.log("Listening on port: " + PORT);
    });
});


// for remote server
// const url = 'mongodb://34.218.212.52/OfficeSpace';

//
// var connect = exports.connect = function connect(callback) {
//
//     mongodb.MongoClient.connect(url, function (err, db) {
//         return callback(err, db);
//     });
// };



