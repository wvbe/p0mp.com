import React, {Component} from 'react';

import handleFetchResponse from '../helpers/handleFetchResponse';

/**
 * Filter out the ServerQuery users identified by their clientType.
 *
 * @param client The ClientObject from the API.
 * @returns {boolean}
 */
function removeTeamSpeakServerQueryClients(client) {
	return client.client_type !== 1
}

export default class TeamSpeakOnline extends Component {
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
		fetch('http://docker-node-03.p0mp.com:9000/teamspeak/clients')
			.then(handleFetchResponse)
			.then((data) => {
				this.setState({
					clientList: data.clientList.filter(removeTeamSpeakServerQueryClients)
				});
			})
			.catch((error) => console.error(error));
	}

	render() {
		return <span>{ this.state.clientList.length } online</span>
	}
}
