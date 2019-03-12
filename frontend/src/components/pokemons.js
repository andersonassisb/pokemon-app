import React from "react";
import Card from "./card";

const Pokemons = props => {
  return (
    props.list &&
    props.list.map((pokemon, i) => (
      <Card
        key={i}
        number={pokemon.number}
        pokemon={pokemon.name}
        type={pokemon.type}
      />
    ))
  );
};

export default Pokemons;
