import React, {Component} from 'react';

import Logo from './Logo';

export default class Header extends Component {
	render() {
		return (
			<section>
				<Logo />
				<h1 style={{ display: 'none' }}>p0mp</h1>
			</section>
		);
	}
}
