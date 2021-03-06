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
    setTimeout(() => this.getPokemons(), 1500);
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

    return pokemons.length === 0 ? (
      <Loading />
    ) : (
      <React.Fragment>
        <div className="fixed">
          <Header title="Pokélab" />
          <Search handleChange={e => this.filterList(e)} />
        </div>

        <div className="list">
          <NotFound show={filteredPokemons.length === 0 && true} />

          <Pokemons
            list={filteredPokemons.length >= 0 ? filteredPokemons : pokemons}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
