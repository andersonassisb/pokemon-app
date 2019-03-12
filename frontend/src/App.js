import React, { Component } from "react";
import "./App.css";

import Header from "./components/header";
import NotFound from "./components/notFound";
import Search from "./components/search";
import Pokemons from "./components/pokemons";

class App extends Component {
  state = {
    pokemons: [],
    filteredPokemons: false
  };

  getPokemons = () => {
    fetch("http://localhost:3030/pokemons")
      .then(response => response.json())
      .then(pokemons => this.setState({ pokemons }));
  };

  componentDidMount() {
    this.getPokemons();
  }

  filterList = e => {
    if (e.target.value.length > 2) {
      const filteredPokemons = this.state.pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().match(e.target.value)
      );
      this.setState({ filteredPokemons });
    } else {
      this.setState({ filteredPokemons: false });
    }
  };

  render() {
    const { pokemons, filteredPokemons } = this.state;

    return (
      <React.Fragment>
        <Header title="Pokélab" />

        <Search handleChange={e => this.filterList(e)} />

        <NotFound show={filteredPokemons.length === 0 && true} />

        <Pokemons
          list={filteredPokemons.length >= 0 ? filteredPokemons : pokemons}
        />
      </React.Fragment>
    );
  }
}

export default App;
