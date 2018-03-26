import React from 'react'
import {Route, Switch } from 'react-router-dom'
import DelayLink from '../etc/DelayLink.jsx'

import GenreList from './GenreList.jsx'
import ReleaseList from './ReleaseList.jsx'
import Release from './Release.jsx'



class Genre extends React.Component{
	render(){
		var path = this.props.match.path

		return (
			<div>
				<div> Раздел Genre </div>
				<GenreList {...this.props}/>

				<Switch> 
					<Route exact path={path}  render={(props) => {
						return(
							<div> choose genre </div>
						)
					}} />
					<Route exact path={path + '/:genre'} component={GenreChooser}/>

					<Route path={path + '/:genre/:release'} component={Release}/>
			
				</Switch>
			</div>
		)
	}
}

const GenreChooser = (props) => {
	var genre = props.match.params.genre

	switch(genre){
		case 'house' : {
				return <House {...props} genre={genre}/>
				break;
			}

		case 'hip-hop' : {
				return <HipHop {...props} genre={genre}/>
				break;
			}

		case 'drum-n-bass' : {
				return <Drumnbass {...props} genre={genre}/>
				break;
			}	
	}
}

const House = (props) => {
	return (<div>
		House music : 
		<ReleaseList {...props} genre={props.genre}/>
	</div>)
}

const HipHop = (props) => {
	return (<div>
		HipHop music : 
		<ReleaseList {...props} genre={props.genre}/>
	</div>)
}

const Drumnbass = (props) => {
	return (<div>
		Drumnbass music : 
		<ReleaseList {...props} genre={props.genre}/>
	</div>)
}



export default Genre