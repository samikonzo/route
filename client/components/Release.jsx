import React from 'react'
import AppActions from '../flux/actions/AppActions.js'
import AppStore from '../flux/stores/AppStore.js'


class Release extends React.Component{

	constructor(props){
		super(props)

		let releaseName = this.props.match.params.release.split('-').join(' - ').split('_').join(' ')
			
		this.state = {
			releaseName : releaseName,
			release : null,
			error : null,
			imgSrc : null,
			isLoading: false,
		}

		this._handleStateChangeEvent = this._handleStateChangeEvent.bind(this)
		this._handleReleaseChangeEvent = this._handleReleaseChangeEvent.bind(this)
	}

	componentDidMount(){
		AppStore.addChangeListener(this._handleStateChangeEvent)
		AppStore.addReleaseChangeListener(this._handleReleaseChangeEvent)
		AppActions.getRelease(this.state.releaseName)
	}

	componentWillUnmount(){
		AppStore.removeChangeListener(this._handleStateChangeEvent)
		AppStore.removeReleaseChangeListener(this._handleReleaseChangeEvent)
	}


	_handleStateChangeEvent(){
		this.setState({
			isLoading : AppStore.isLoading()
		})
	}

	_handleReleaseChangeEvent(){
		var release = AppStore.getRelease()
		var defError = 'something wrong'

		l(release)

		if(!release){
			var error = AppStore.getError() || defError

			this.setState({
				error : error.response.statusText
			})
			return
		}

		this.setState({
			error : null,
			release : release,
			description : release.description,
			imgSrc : release.img,
		})



	}

	render(){
		var descriptionText = (this.state.release && this.state.release.description) || this.state.error
		
		var img = <div> </div> //default img
		if(this.state.imgSrc){ 
			img = (<img src={this.state.imgSrc}/>) 
		}


		return(
			<div> 
				<h1> {this.state.releaseName} </h1>
					{img}
				<p>	{ descriptionText } </p>
			</div>
		)
	}	
}

export default Release