import React, {Component} from 'react';

export default class TeamSpeakOnline extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			clientList: []
		};
	}

	componentDidMount() {
		this.TeamSpeakOnline();
	}

	TeamSpeakOnline() {
		return fetch('http://128.199.55.12:9010/teamspeak/clients')
			.then((response) => {
				if (response.status !== 200) {
					console.error(`Problems, status code: ${response.status}`);
					return;
				}

				response.json().then((data) => {
					this.setState({ clientList: data.clientList });
				});
			});
	}

	render() {
		return <span>{ this.state.clientList.length } online</span>
	}
}
