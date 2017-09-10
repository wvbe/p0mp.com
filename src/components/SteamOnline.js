import React, {Component} from 'react';

import handleFetchResponse from '../helpers/handleFetchResponse';

export default class SteamOnline extends Component {
	constructor(props) {
		super(props);

		this.state = {
			membersOnline: 0,
			membersInGame: 0
		};
	}

	componentDidMount() {
		this.SteamOnline();
	}

	SteamOnline() {
		fetch('http://128.199.55.12:9000/steam')
			.then(handleFetchResponse)
			.then((data) => {
				this.setState({
					membersOnline: data.membersOnline,
					membersInGame: data.membersInGame
				});
			})
			.catch((error) => console.error(error));
	}

	render() {
		return <span>{ this.state.membersOnline } online, { this.state.membersInGame } in-game</span>
	}
}
