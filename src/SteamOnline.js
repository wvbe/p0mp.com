import React, {Component} from 'react';

export default class SteamOnline extends React.Component {
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
		return fetch('http://128.199.55.12:9000/steam')
			.then((response) => {
				if (response.status !== 200) {
					console.error(`Problems, status code: ${response.status}`);
					return;
				}

				response.json().then((data) => {
					this.setState({
						membersOnline: data.membersOnline,
						membersInGame: data.membersInGame
					});
				});
		});
	}

	render() {
		return <span>{ this.state.membersOnline } online, { this.state.membersInGame } in-game</span>
	}
}
