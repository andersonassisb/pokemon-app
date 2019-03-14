import React from "react";

const Modal = props => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            {props.pokemon && (
              <h5 className="modal-title" id="exampleModalLabel">
                {"#" + props.pokemon.number + " " + props.pokemon.name}
              </h5>
            )}
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <table className="about-content">
            <tbody>
              <tr>
                <td>
                  <p className="style-about">About:</p>
                  <p className="about-align-center">
                    {props.info.about && props.info.about}
                  </p>
                </td>
                <td>
                  <p className="style-about">Category:</p>
                  <p className="about-align-center">
                    {props.info.category && props.info.category}
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="style-about">Height:</p>
                  <p className="about-align-left">
                    {props.info.height && props.info.height}
                  </p>
                </td>
                <td>
                  <p className="style-about">Weight:</p>
                  <p className="about-align-center">
                    {props.info.weight && props.info.weight}
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="style-about">Skill:</p>
                  <p className="about-align-left">
                    {props.info.skill && props.info.skill}
                  </p>
                </td>
                <td>
                  <p className="style-about about-align-center">Types:</p>
                  {props.pokemon &&
                    props.pokemon.type.map(type => (
                      <div
                        key={type}
                        className={`pokemon-content-type ${type.toLowerCase()}`}
                      >
                        {type}
                      </div>
                    ))}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
