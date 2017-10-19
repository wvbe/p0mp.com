import React, {Component} from 'react';

import handleFetchResponse from '../helpers/handleFetchResponse';

/**
 * 
 */
const STEAM_API_ENDPOINT = 'http://128.199.55.12:9000/steam';

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
		return fetch(STEAM_API_ENDPOINT)
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
