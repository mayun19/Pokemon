import React, { Component } from "react";

export default class NavBar extends Component {
	render() {
		return (
			<div>
				{/* <h1>Pokémon</h1> */}
				<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
					<a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
						Pokémon
					</a>
				</nav>
			</div>
		);
	}
}
