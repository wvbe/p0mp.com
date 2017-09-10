import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './components/App'
import About from './components/About'

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={App} />
			<Route path='/about' component={About} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);
