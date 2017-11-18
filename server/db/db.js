const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const connectionString = 'mongodb://localhost/whats_poppin';


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/whats_poppin",
  {
    useMongoClient: true
  }
);


mongoose.connection.on('connected', function(){

	console.log('connected to ' + connectionString);
})
mongoose.connection.on('error', function(error){

	console.log('mongodb error ' + error);
})
mongoose.connection.on('disconnected', function(){

	console.log('Mongoose disconnected from ' + connectionString);
})