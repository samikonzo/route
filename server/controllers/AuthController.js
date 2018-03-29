const mongoose = require('mongoose')
const passport = require('passport')
const User = require('../models/User')


var userController = {};

// Restrict accet to root page
userController.home = (req, res) => {
	res.resnder('index', {user: req.user})
}

// Go to registration page
userController.register = (req, res) => {
	res.render('register')
}

// Post registration
userController.doRegister = (req, res) => {
	User.register(new User({
		username: req.body.username,
		name : req.body.name
	}), req.body.password, function(err, user){
		if(err) return res.render('register', {user : user})

		passport.authenticate('local')(req, res, function(){
			res.redirect('/')
		})	
	})
}

// Go to login page
userController.login = (req, res) => {
	res.render('/login')
}


// Post login
userController.logout = (req, res) => {
	req.logout()
	res.redirect('/')
}