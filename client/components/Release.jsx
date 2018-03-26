import React from 'react'

class Release extends React.Component{


	render(){
		let releaseName = this.props.match.params.release.split('-').join(' - ').split('_').join(' ')

		l(this.props)

		return(
			<div> {releaseName} </div>
		)
	}	
}

export default Release