import React, { Component } from "react";
import "../background.css";

/* Loading Pokemons */
import Eevee from "../loading-images/eevee.gif";
import Flareon from "../loading-images/flareon.gif";
import Jolteon from "../loading-images/jolteon.gif";
import Umbreon from "../loading-images/umbreon.gif";
import Glaceon from "../loading-images/glaceon.gif";
import Espeon from "../loading-images/espeon.gif";
import Vaporeon from "../loading-images/vaporeon.gif";
import Sylveon from "../loading-images/sylveon.gif";
import Leafeon from "../loading-images/leafeon.gif";

const pickPokemon = [
  Flareon,
  Jolteon,
  Umbreon,
  Glaceon,
  Espeon,
  Vaporeon,
  Sylveon,
  Leafeon
];

const pRandom = pickPokemon[Math.floor(Math.random() * pickPokemon.length)];

class Loading extends Component {
  render() {
    return (
      <div className="load">
        <img className="loading" src={pRandom} alt="Loading" />
      </div>
    );
  }
}

export default Loading;
