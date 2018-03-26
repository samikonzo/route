import React from 'react'
import {Link, Route} from 'react-router-dom'

//pages
import Admin from '../components/Admin.jsx'
import Genre from '../components/Genre.jsx'
import Home from '../components/Home.jsx'



class App extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			route : window.location.hash.substr(1)
		}
	}

	componentDidMount(){
		window.addEventListener('hashchange', () => {
			this.setState({
				route: window.location.hash.substr(1)
			})
		})
	}


	render(){
		let Child

		switch (this.state.route) {
			case '/admin': 
				Child = Admin
				break;

			case '/genre':
				Child = Genre
				break;

			default:
				Child = Home
				break;
		}


		return(
			<div className='container'>
				<h1>App</h1>
				<ul>
					<li><a href="#/admin">Admin</a></li>
					<li><a href="#/genre">Genre</a></li>
				</ul>

				<Child />
			</div>
		)
	}
}










export default App