//pulls in express
var express = require('express');
//app is express
var app = express();


//create server to host
var server = require('http').createServer(app);
var path = require('path');

//require express session to authenticate user
var session = require('express-session');

//get parameters from body
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

//make public folder static so that it can be accessed public
app.use(express.static(path.join(__dirname, 'public')));

//connect to database
require('./db/db.js');

//connect to the model
var User = require('./models/User.js');
var Post = require('./models/Post.js');
var Comment = require('./models/Comment.js');

app.use(session({
		secret: "shhh, I'm a password",
		resave: false,
		saveUninitialized: true,
		cookie: {secure: false}


}));

//connect to controller
var UserController = require('./controllers/UserController');
var PostController = require('./controllers/PostController');
var CommnetController = require('./controllers/CommentController');

app.use('/', UserController);
// app.use('/post', PostController);
// app.use('/comment', CommnetController);







server.listen(3000, function(){

	console.log("listening on port 3000");
})