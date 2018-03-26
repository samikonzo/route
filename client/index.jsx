import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './containers/App.jsx'


/*ReactDom.render(
	<BrowserRouter> 
		<App/> 
	</BrowserRouter>,
	document.getElementById('app')
)*/


ReactDom.render(
	<App/>, document.getElementById('app')
)