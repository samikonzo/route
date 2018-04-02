const mongoose = require('mongoose')
const passport = require('passport')
const User = require('../models/User')



var userController = {};

// Restrict accet to root page
userController.home = (req, res, next) => {
	//res.resnder('index', {user: req.user})
	//res.redirect('/')
	next()
}

// Go to registration page
userController.register = (req, res, next) => {
	//res.redirect('/register')
	next()
}

// Post registration
userController.doRegister = (req, res) => {
	l(' ')
	l(req.body)
	l(' ')


	User.register(new User({
		username: req.body.username,
		name : req.body.name
	}), req.body.password, function(err, user){
		if(err){
			return res.redirect('/register')
			l(err)
		}

		passport.authenticate('local')(req, res, function(){
			l('time fo redirect to /')

			res.redirect('/')
		})	
	})
}

// Go to login page
userController.login = (req, res) => {
	l(' userController. login ')
	//res.redirect('/login')
}

// Post login
userController.doLogin = (req, res) => {
	l('doLogin')
	l(req.body)
	/*passport.authenticate('local')(req, res, function(err, user, info){
		l('AUTH : ')
		l('err : ', err)
		l('user : ', user)
		l('info : ', info)
		if( req.isAuthenticated() ){
			l(req.query)
			res.redirect('/')
			return
		}
		//res.redirect('/')
	})
*/
	//res.redirect('/')


	/*passport.authenticate('local', {failureRedirect: '/bebebe'})(req, res, function(err){
		l('bebebe')
	})*/


	passport.authenticate('local', {successRedirect: '/', failureRedirect: '/'})(req, res, function success(err){
		l('login success')
		//res.send('success')
		//res.redirect('/')
	})

	//res.redirect('/badlogin')
}

// logout
userController.logout = (req, res) => {
	l('logout func')
	req.logout()
	res.redirect('/')
}

module.exports = userController