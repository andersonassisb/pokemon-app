import React, { Component } from "react";
import "./App.css";

import Header from "./components/header";
import NotFound from "./components/notFound";
import Search from "./components/search";
import Pokemons from "./components/pokemons";
import Loading from "./components/loading";

class App extends Component {
  state = {
    pokemons: [],
    filteredPokemons: false,
    selectedPokemon: []
  };

  getPokemons = () => {
    fetch("http://192.168.1.3:3030/pokemons")
      .then(response => response.json())
      .then(pokemons => this.setState({ pokemons }));
  };

  componentDidMount() {
    this.getPokemons();
  }

  filterList = e => {
    if (e.target.value.length > 2) {
      const filteredPokemons = this.state.pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().match(e.target.value.toLowerCase())
      );
      this.setState({ filteredPokemons });
    } else {
      this.setState({ filteredPokemons: false });
    }
  };

  render() {
    const { pokemons, filteredPokemons } = this.state;

    return <Loading />;
  }
}

export default App;
