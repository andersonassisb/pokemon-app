import React, { Component } from "react";
import Type from "./type";

class card extends Component {
  pokemonSelected = e => this.props.handlePokemonClick(e);

  render() {
    return (
      <div className="card">
        <table
          className="table table-borderless"
          onClick={this.pokemonSelected}
        >
          <tbody>
            <tr>
              <td
                className="pokemon-image align-middle text-center"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <img
                  className="fix-size"
                  src={`/pokemons-v2/${this.props.number}.png`}
                  alt="1"
                />
              </td>
              <td
                className="pokemon-name align-middle text-center"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <p className="p text-secondary">#{this.props.number}</p>
                <p className="p name">{this.props.pokemon}</p>
              </td>
              <td
                className="pokemon-type align-middle text-center"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                {this.props.type.map((type, i) => (
                  <Type key={i} name={type} />
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default card;
