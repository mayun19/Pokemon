import React from "react";

import { Card } from "../card/card.component";

import "./card-list.style.css";

export const CardList = (props) => (
	<div className="card-list mt-4">
		{props.pokemons.map((pokemon) => (
			<Card key={pokemon.name} pokemon={pokemon}></Card>
		))}
	</div>
);
