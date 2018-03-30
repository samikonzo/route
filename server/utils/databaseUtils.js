const mongoose = require('mongoose')
const l = console.log;

function tryConnectToDatabase(){
	return mongoose.connect(`mongodb://localhost/reactRouterLearn`)
}

const db = {
	connectToDatabase(){
		return new Promise( connected => {
			tryConnectToDatabase()
				.then( 
					resolve => {
						l('connected to database')
						connected()
					},
					err => {
						l('error connect to database')
						setTimeout(db.connectToDatabase, 1000)
					}
				)
			
		})

	}
}

module.exports = db