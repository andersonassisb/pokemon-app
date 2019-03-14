import React, { Component } from "react";
import Card from "./card";
import Modal from "./modal";

class Pokemons extends Component {
  state = {
    info: false,
    selectPokemon: false
  };

  pokemonSelected = selectPokemon => {
    const selectPokemonFixName = selectPokemon.name
      .toLowerCase()
      .replace(" ", "-")
      .replace(".", "")
      .replace("♀", "-female")
      .replace("♂", "-male")
      .replace("'", "")
      .trim();

    //console.log(selectPokemonFixName);

    if (selectPokemon) {
      fetch(`http://172.16.7.133:3030/info/${selectPokemonFixName}`)
        .then(response => response.json())
        .then(info => this.setState({ selectPokemon, info }));
    }
  };

  render() {
    const { selectPokemon, info } = this.state;

    return (
      <React.Fragment>
        <Modal pokemon={selectPokemon && selectPokemon} info={info && info} />
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
