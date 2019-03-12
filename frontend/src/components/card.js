import React from "react";
import Type from "./type";

const Card = props => {
  return (
    <div className="card">
      <table className="table table-borderless">
        <tbody>
          <tr>
            <td className="pokemon-image align-middle text-center">
              <img src={`/pokemons-v2/${props.number}.png`} alt="1" />
            </td>
            <td className="pokemon-name align-middle text-center">
              <p className="p text-secondary">#{props.number}</p>
              <p className="p">{props.pokemon}</p>
            </td>
            <td className="pokemon-type align-middle text-center">
              {props.type.map((type, i) => (
                <Type key={i} name={type} />
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Card;
