
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const AWS = require('aws-sdk');
const bcrypt = require('bcrypt');
const collective = require('./collective');
// Other require statements...

AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const app = express();

app.use(bodyParser.json()); // For parsing application/json
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Added route handler for root path
app.get('/', function (req, res) {
  res.send('Welcome to Boost Collective!');
});

// ...

passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: "http://localhost:3000/auth/twitter/callback"
},
function(token, tokenSecret, profile, cb) {
    // In a real application, you'd look up the user in your database and create them if they don't exist
    return cb(null, profile);
}
));

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/twitter/callback', 
passport.authenticate('twitter', { failureRedirect: '/login' }),
function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

// Other routes...

app.use(express.static("client"));

app.listen(3000, function () {
  console.log('Boost Collective app listening on port 3000!');
});
