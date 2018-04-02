import axios from 'axios'

export default {
	getLoginStatus(){
		return axios.get('/loginStatus')
	},

	getRelease(releaseName){
		return axios.get('/release/'+releaseName)
	},
}