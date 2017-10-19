import React, {Component} from 'react';

import handleFetchResponse from '../helpers/handleFetchResponse';

/**
 * 
 */
const TEAMSPEAK_API_CLIENTS_ENDPOINT = 'http://128.199.55.12:9010/teamspeak/clients';

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
		return fetch(TEAMSPEAK_API_CLIENTS_ENDPOINT)
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
