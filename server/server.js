global.l = console.log


const express = require('express')
const app = express()
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy



const db = require('./utils/databaseUtils.js')
db.connectToDatabase()


const RELEASES = require('./serverStore/releases.js')



app.use(session({
	secret : 'keyboard cat',
	resave : false,
	saveUnitialized: false,
}))
app.use(passport.initialize())
app.use(passport.session())

var User = require('./models/user')
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())




app.use((req, res, next) => {
	l(req.method, req.url)
	l(' ')
	next()
})

app.use(express.static(__dirname+'/public'))

// get release
app.all('/release/:releaseName', (req, res, next) => {
	var releaseName = req.params.releaseName
	var artist = releaseName.split('-')[0].trim()
	var track = releaseName.split('-')[1].trim()
	var artistReleases = RELEASES[artist]
	var release 

	l('get release : ', releaseName)
	l('artist : ', artist)
	l('track : ', track)

	if(!artistReleases){
		send404Error()
		return
	}

	release = artistReleases[track]

	if(!release){
		send404Error()
		return
	}

	res.send(release)

	function send404Error(){
		res.status(404).send('Not found')
	}

})



app.get(/.*/, function root(req, res){
	res.sendFile(__dirname + '/public/index.html')
})

app.listen(3000)