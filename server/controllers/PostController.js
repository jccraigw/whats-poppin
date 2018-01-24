const db = require("../models");

//CRUD routes below
module.exports ={

	findAll: function(req, res){
		db.Post
			.find(req.query)
			.sort({date: -1})
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(442).json(err));
	},
	findById: function(req, res) {
    	db.Post
	     	.findById(req.params.id)
	     	.populate('comments')
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
  	},
	create: function(req, res){
		db.Post
			.create(req.body)
			.then(post => {
				console.log("user id",post.userid)
				let temp = {

					posts: post._id
				}
				//need to figure out get call here
				db.User
				.findById(post.userid)
			})
			.then(dbModel=> res.json(dbModel))
			.catch(err => res.status(442).json(err));
	},
	update: function(req, res) {
    	db.Post
		    .findOneAndUpdate({ _id: req.params.id }, req.body)
		    .then(dbModel => res.json(dbModel))
		    .catch(err => res.status(422).json(err));
  	},
  	remove: function(req, res) {
    	db.Post
		    .findById({ _id: req.params.id })
		    .then(dbModel => dbModel.remove())
		    .then(dbModel => res.json(dbModel))
		    .catch(err => res.status(422).json(err));
	}
};