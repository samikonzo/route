import React from 'react'
import {Route, Switch } from 'react-router-dom'
import DelayLink from '../etc/DelayLink.jsx'

class GenreList extends React.Component{
	render(){
		return(
			<div>
				GenreList.jsx
				<ul>
					<li>
						<DelayLink to="/genre/house">House</DelayLink>	
					</li>

					<li>
						<DelayLink to="/genre/hip-hop">Hip Hop</DelayLink>	
					</li>

					<li>
						<DelayLink to="/genre/drum-n-bass">Drum'n'Bass</DelayLink>	
					</li>
				</ul>
			</div>
		)
	}
}



export default GenreList