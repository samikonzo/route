import Dispatcher from '../dispatcher/AppDispatcher.js'
import Constants from '../constants/AppConstants.js'
import { EventEmitter } from 'events'


const State = {
	loading : false,
	release : null,
	error : null,
	login : false,
}

const Events = {
	CHANGE_STATE : 'changeState',
	CHANGE_RELEASE : 'changeRelease',
}


Dispatcher.register( function(action){
	switch(action.type){

		// login
		case Constants.CHECK_LOGIN : {
			State.loading = true
			AppStore.emitChange()
			break;
		}

		case Constants.CHECK_LOGIN_SUCCESS : {
			var result = action.result.data
			State.login = result
			State.loading = false
			AppStore.emitChange()
			break;
		}
		case Constants.CHECK_LOGIN_FAIL : {
			State.error = action.error
			State.loading = false

					l('CHECK_LOGIN_FAIL error : ')

			AppStore.emitChange()
			break;
		}


		// release request
		case Constants.GET_RELEASE_REQUEST : {
			State.loading = true
			AppStore.emitChange()
			break;
		}

		case Constants.GET_RELEASE_SUCCESS : {
			State.loading = false
			State.release = action.data.data
			
			AppStore.emitChange()
			AppStore.emitReleaseChange()
			break;
		}

		case Constants.GET_RELEASE_FAIL : {
			State.loading = false
			State.error = action.err

			AppStore.emitChange()
			AppStore.emitReleaseChange()
			break;
		}

	}
})

const AppStore = Object.assign({}, EventEmitter.prototype,{

	// state of app
	addChangeListener(f){
		this.on(Events.CHANGE_STATE, f)
	},

	removeChangeListener(f){
		this.removeListener(Events.CHANGE_STATE, f)
	},

	emitChange(){
		this.emit(Events.CHANGE_STATE)
	},


	// current release data
	addReleaseChangeListener(f){
		this.on(Events.CHANGE_RELEASE, f)
	},

	removeReleaseChangeListener(f){
		this.removeListener(Events.CHANGE_RELEASE, f)
	},

	emitReleaseChange(){
		this.emit(Events.CHANGE_RELEASE)
	},


	// etc
	isLoading(){
		return State.loading
	},

	getRelease(){
		return State.release
	},

	getError(){
		return State.error
	},

	isLogined(){
		return State.login
	},
})

export default AppStore


