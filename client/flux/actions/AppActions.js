import Dispatcher from '../dispatcher/AppDispatcher.js'
import Constants from '../constants/AppConstants.js'
import api from '../api/api.js'

const AppActions = {
	checkLogin(){
		Dispatcher.dispatch({
			type: Constants.CHECK_LOGIN
		})

		// to server

		api.getLoginStatus().then(
			result => {
				l('AppActions getLoginStatus : ', result)
				Dispatcher.dispatch({
					type : Constants.CHECK_LOGIN_SUCCESS,
					response : result,
					result: result,
				})
			},
			err => {
				l('AppActions getLoginStatus : ', err)

				Dispatcher.dispatch({
					type : Constants.CHECK_LOGIN_FAIL
				})
			}
		)
	},
	
	getRelease(releaseName){
		Dispatcher.dispatch({
			type : Constants.GET_RELEASE_REQUEST,
		})

		api.getRelease(releaseName)
			.then(
				( data ) => {
					Dispatcher.dispatch({
						type : Constants.GET_RELEASE_SUCCESS,
						data : data,
					})
				}, 
				( err ) => {
					Dispatcher.dispatch({
						type : Constants.GET_RELEASE_FAIL,
						err : err,
					})
				})
	},
}

export default AppActions