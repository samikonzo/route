var express = require('express')
var router = express.Router()
var auth = require('../controllers/AuthController')

l(auth)

// restrict index for logged in user only
router.get('/', auth.home)

// route to register page
router.get('/register', auth.register)

// route for register page
router.post('/register', auth.doRegister)

// route to login page
router.get('/login', auth.login)

// route for login action
router.post('/login', auth.doLogin)

// route for loginStatus
router.get('/loginStatus', (req, res) => {
	var status = req.isAuthenticated()
	l('status : ', status)
	res.send(status)
})

// route for logout action
router.get('/logout', auth.logout)


module.exports = router