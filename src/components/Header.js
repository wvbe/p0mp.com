import React, { Component } from 'react'

import Logo from './Logo'
import Navigation from './Navigation'

export default class Header extends Component {
	render() {
		return (
			<div
				style={{
					background: '#666',
					display: 'flex',
					flexDirection: 'row'
				}}
			>
				<Logo />
				<Navigation />
			</div>
		);
	}
}
