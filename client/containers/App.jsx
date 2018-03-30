import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import DelayLink from  '../etc/DelayLink.jsx'

//pages
import Login from '../components/Login.jsx'
import Register from '../components/Register.jsx'
import Admin from '../components/Admin.jsx'
import Genre from '../components/Genre.jsx'
import Home from '../components/Home.jsx'
import Page404 from '../components/Page404.jsx'



class App extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			route : window.location.hash.substr(1),
			session : null,
		}
	}

	render(){
		var switchBlock = (
			<Switch>
				<Route path="/register" component={Register}/>
				<Route path='*' component={Login} />
			</Switch>
			
		)

		if(this.state.session){
			switchBlock = (
				<div>
					<ul>
						<li><DelayLink to="/">Home</DelayLink></li>
						<li><DelayLink to="/admin" delay="2000">Admin</DelayLink></li>
						<li><Link to="/genre">Genre</Link></li>
					</ul>

					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/admin' component={Admin} />
						<Route path='/genre' component={Genre} />
						<Route path='*' component={Page404} />
					</Switch>
				</div>
			)
		}


		return(
			<div> 
				<h1>App.jsx</h1>
				

				
				{switchBlock}
				 
					
			</div>
		)
	}
}

export default App