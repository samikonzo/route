import axios from 'axios'

export default {
	getRelease(releaseName){
		return axios.get('/api/release/'+releaseName)
	},
}