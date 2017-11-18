//pulls in express
const express = require('express');
//app is express
const app = express();
const routes = require("./routes");

//create server to host
const server = require('http').createServer(app);
const path = require('path');
const PORT = process.env.PORT || 3001;

//require express session to authenticate user
const session = require('express-session');

//get parameters from body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//make public folder static so that it can be accessed public
app.use(express.static("client/build"));

//connect to database
require('./db/db.js');

//connect to the model
const User = require('./models/User.js');
const Post = require('./models/Post.js');
const Comment = require('./models/Comment.js');

app.use(session({
		secret: "shhh, I'm a password",
		resave: false,
		saveUninitialized: true,
		cookie: {secure: false}


}));


app.use(routes);


server.listen(PORT, function(){

	console.log("listening on port 3001");
})