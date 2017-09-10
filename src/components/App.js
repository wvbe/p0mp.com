import React, { Component } from 'react'

import Header from './Header'
import SteamOnline from './SteamOnline'
import TeamSpeakOnline from './TeamSpeakOnline'

export default class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<section>
					<h1>community</h1>
					<ul>
						<li><a href="http://git.p0mp.com" target="_blank">git.p0mp.com</a></li>
						<li><a href="ts3server://teamspeak.p0mp.com">teamspeak.p0mp.com</a></li>
						<li><a href="https://p0mp.slack.com" target="_blank">p0mp.slack.com</a></li>
					</ul>
				</section>
				<section>
					<h1>game servers</h1>
					<ul>
						<li><a href="steam://connect/rust.p0mp.com:28015">rust.p0mp.com</a></li>
					</ul>
				</section>
				<section>
					<h1>online players</h1>
					<ul>
						<li>steam: <SteamOnline/></li>
						<li>teamspeak: <TeamSpeakOnline/></li>
					</ul>
				</section>
			</div>
		)
	}
}
