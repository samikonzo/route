import React from 'react'
import DelayLink from '../etc/DelayLink.jsx'

class Login extends React.Component{

	constructor(props){
		super(props)

		this._onSubmit = this._onSubmit.bind(this)
	}

	_onSubmit(e){
		/*e.preventDefault()
		l(e)*/
	}

	render(){
		return(
			<div className="Login">
				<form action='/login' method='post' onSubmit={this._onSubmit}>
					<label>
						login : <input type="text" name='username'/>
					</label>

					<label>
						password : <input type="password" name='password'/>
					</label>

					<input type='submit' value='login' />
				</form>

				<DelayLink to="/register"> register </DelayLink>
			</div>
		)
	}
}

export default Login