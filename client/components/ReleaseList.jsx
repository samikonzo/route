import React from 'react'
import DelayLink from '../etc/DelayLink.jsx'

const releases = {
	'house' : [
		{artist: 'Sami Konzo', track: 'Trip'},
		{artist: 'Sami Konzo', track: 'Stick'},
	],

	'drum-n-bass' : [
		{artist: 'Random Movement', track: 'I Stayed'},
		{artist: 'Noisia', track : 'Stigma'},
	],
}


class ReleaseList extends React.Component{


	render(){
		var genre = this.props.genre
		var genreReleases = releases[genre]
		var template
		
		var url = this.props.match.url

		if(!genreReleases){
			template = (<div> no releases in genre : {genre} </div>)
		} else {
			template = (<ul>
				{
					genreReleases.map((release,i) => {
						var linkName = release.artist.split(' ').join('_') + '-' + release.track.split(' ').join('_')
						var link = `${url}/${linkName}`
						return (<li key={i}> <DelayLink to={link}> {release.artist} : {release.track} </DelayLink> </li>)
					})
				}
				</ul>
			)
		}

		return(
			template
		)
	}	
}

export default ReleaseList