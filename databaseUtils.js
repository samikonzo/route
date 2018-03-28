const mongoose = require('mongoose')
const l = console.log;

function tryConnectToDatabase(){
	return mongoose.connect(`mongodb://localhost/reactRouterLearn`)
}

module.exports = {
	connectToDatabase(){
		tryConnectToDatabase()
			.then( 
				resolve => {
					l('connected to database')
				},
				err => {
					l('error connect to database')
					setTimeout(connectToDatabase, 1000)
				}
			)
	},

	
}