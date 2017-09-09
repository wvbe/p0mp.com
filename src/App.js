import React, {Component} from 'react';

import P0mpLogo from './P0mpLogo';
import SteamOnline from './SteamOnline';
import TeamSpeakOnline from './TeamSpeakOnline';

export default class App extends Component {
	render() {
		return <div
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '16em',
				height: 'auto',
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)'
			}}
		>
			<h1 style={{ display: 'none' }}>p0mp</h1>
			<P0mpLogo />
			<section>
				<h1>community</h1>
				<ul>
					<li><a href="ts3server://teamspeak.p0mp.com">teamspeak.p0mp.com</a></li>
					<li><a href="https://p0mp.slack.com">p0mp.slack.com</a></li>
				</ul>
			</section>
			<section>
				<h1>game servers</h1>
				<ul>
					<li><a href="steam://connect/rust.p0mp.com:28015">rust.p0mp.com</a></li>
				</ul>
			</section>
			<section>
				<h1>online</h1>
				<ul>
					<li>steam: <SteamOnline /></li>
					<li>teamspeak: <TeamSpeakOnline /></li>
				</ul>
			</section>
		</div>
	}
}
