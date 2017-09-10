import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
	render() {
		return (
			<nav>
				<ul>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/about'>About</Link></li>
				</ul>
			</nav>
		)
	}
}
