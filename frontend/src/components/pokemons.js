import React, { Component } from "react";
import Card from "./card";
import Modal from "./modal";

class Pokemons extends Component {
  state = {
    selectPokemon: false
  };

  pokemonSelected = selectPokemon => {
    if (selectPokemon) {
      this.setState({ selectPokemon });
    }
  };

  render() {
    const { selectPokemon } = this.state;

    return (
      <React.Fragment>
        <Modal pokemon={selectPokemon && selectPokemon} />
        {this.props.list &&
          this.props.list.map((pokemon, i) => (
            <Card
              key={i}
              number={pokemon.number}
              pokemon={pokemon.name}
              type={pokemon.type}
              handlePokemonClick={() => this.pokemonSelected(pokemon)}
            />
          ))}
      </React.Fragment>
    );
  }
}

export default Pokemons;
