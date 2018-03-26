const express = require('express')
const app = express()
const l = console.log


app.use((req, res, next) => {
	l(req.method, req.url)
	l(' ')
	next()
})

app.use(express.static(__dirname+'/public'))

app.get(/.*/, function root(req, res){
	res.sendFile(__dirname + '/public/index.html')
})

app.listen(3000)