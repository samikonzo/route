const express = require('express')
const app = express()
const l = console.log
const releases = require('./serverStore/releases.js')


app.use((req, res, next) => {
	l(req.method, req.url)
	l(' ')
	next()
})

app.use(express.static(__dirname+'/public'))


app.all('/release/:releaseName', (req, res, next) => {
	var releaseName = req.params.releaseName
	var artist = releaseName.split('-')[0].trim()
	var track = releaseName.split('-')[1].trim()
	var artistReleases = releases[artist]
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