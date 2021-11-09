import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { NavigationBtn } from "./components/page-navigation/back-to-top";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			pokemons: [],
			search: "",
		};
	}

	componentDidMount() {
		fetch("https://pokeapi.co/api/v2/pokemon?limit=500")
			.then((response) => response.json())
			.then((name) => this.setState({ pokemons: name.results }));
	}

	handleChange = (e) => {
		this.setState({ search: e.target.value });
	};

	render() {
		const { pokemons, search } = this.state;
		const fileteredPokemons = pokemons.filter((pokemon) =>
			pokemon.name.toLowerCase().includes(search.toLowerCase())
		);

		return (
			<div className="App">
				<NavBar />
				<div className="container mt-3">
					<h4>
						<a
							href="https://www.linkedin.com/in/mutiaraayun"
							target="_blank"
							noreferrer
						>
							Author
						</a>
					</h4>
					<h1>Pokemon Database</h1>
				</div>
				<NavigationBtn />
				<CardList pokemons={fileteredPokemons}></CardList>
			</div>
		);
	}
}

export default App;
