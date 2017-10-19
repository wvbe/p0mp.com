import React, { Component } from 'react';

import handleFetchResponse from '../helpers/handleFetchResponse';

/**
 * 
 */
const DISCORD_API_ENDPOINT = 'https://discordapp.com/api/guilds/300655148923879424/widget.json';

export default class DiscordOnline extends Component {
	constructor(props) {
		super(props);

		this.state = {
			channels: [],
			members: []
		};
	}

	componentDidMount() {
		this.updateOnlineCount();
	}

	updateOnlineCount() {
		return fetch(DISCORD_API_ENDPOINT)
			.then(handleFetchResponse)
			.then((data) => {
				this.setState({
					channels: data.channels,
					members: data.members
				});
			})
			.catch((error) => console.error(error));
	}

	render() {
		return <span>{ this.state.members.length } online</span>
	}
}
