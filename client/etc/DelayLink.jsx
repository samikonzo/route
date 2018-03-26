import React from 'react'
import { Link } from 'react-router-dom'

class DelayLink extends React.Component{
	constructor(props){
		super(props)

		this._handleClick = this._handleClick.bind(this)
	}


	_handleClick(e){
		e.preventDefault()

		const { to, replace, delay = 200 } = this.props
		const { history } = this.context.router

		setTimeout(() => {
			if(replace){
				history.replace(to)
			} else {
				history.push(to)
			}
		}, delay)
	}

	render(){
		const props = Object.assign({}, this.props)
		return(
			<Link {...props} onClick={this._handleClick}/>
		)
	}
}

DelayLink.contextTypes = Link.contextTypes

export default DelayLink