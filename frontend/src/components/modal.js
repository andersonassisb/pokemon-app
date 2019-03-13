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
                {"#00" + props.pokemon.number + " " + props.pokemon.name}
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
          {props.pokemon &&
            props.pokemon.type.map(type => (
              <div
                key={type}
                className={`badge pokemon-content-type ${type.toLowerCase()}`}
              >
                {type}
              </div>
            ))}
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
