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
			visible: false,
		}

		this._handleStateChangeEvent = this._handleStateChangeEvent.bind(this)
		this._handleReleaseChangeEvent = this._handleReleaseChangeEvent.bind(this)
		this._showContent = this._showContent.bind(this)
		this._hideContent = this._hideContent.bind(this)

	}

	componentDidMount(){
		AppStore.addChangeListener(this._handleStateChangeEvent)
		AppStore.addReleaseChangeListener(this._handleReleaseChangeEvent)
		AppActions.getRelease(this.state.releaseName)

		setTimeout(() => {this._showContent()}, 100)
	}

	componentWillUnmount(){
		AppStore.removeChangeListener(this._handleStateChangeEvent)
		AppStore.removeReleaseChangeListener(this._handleReleaseChangeEvent)
	}
	
	componentWillReceiveProps(nextProps){
		let releaseName = nextProps.match.params.release.split('-').join(' - ').split('_').join(' ')
		
		this.setState({
			releaseName : releaseName
		}, AppActions.getRelease(releaseName))
	}


	_handleStateChangeEvent(){
		var isLoading = AppStore.isLoading()

		this.setState({
			isLoading : isLoading
		})
	}

	_handleReleaseChangeEvent(){
		var release = AppStore.getRelease()

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
		}, this._showContent)
	}

	_showContent(){
		this.setState({
			visible : 1
		})
	}

	_hideContent(){
		this.setState({
			visible : 0
		})
	}

	render(){
		var descriptionText = (this.state.release && this.state.release.description) || this.state.error
		
		var img = <div> </div> //default img
		if(this.state.imgSrc){ 
			img = (<img src={this.state.imgSrc}/>) 
		}

		var wrapperStyle = {
			transition: '1s',
			opacity: this.state.visible ? 1 : 0,
		}

		return(
			<div ref={elem => this.elem = elem} style={wrapperStyle} className="bebebe"> 
				<h1> {this.state.releaseName} </h1>
					{img}
				<p>	{ descriptionText } </p>
			</div>
		)
	}	
}

export default Release