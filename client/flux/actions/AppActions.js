import Dispatcher from '../dispatcher/AppDispatcher.js'
import Constants from '../constants/AppConstants.js'
import api from '../api/api.js'

const AppActions = {
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