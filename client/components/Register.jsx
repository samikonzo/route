import React from 'react'
import DelayLink from '../etc/DelayLink.jsx'

class Register extends React.Component{
	render(){
		return (
			<div>
				<form action="/register" method="post">
					<label> name <input type='text' name='name' placeholder='name' /> </label>
					<label> login <input type='text' name='username' placeholder='login' /> </label>
					<label> password <input type='password' name='password' placeholder='pwd'/> </label>
					<input type='submit' value='registration confirm' />
				</form>

				<DelayLink to={'/'}> to login page </DelayLink>
			</div>
		)	
	}
}

export default Register