import React from "react";

const Type = props => {
  return (
    <p className="p">
      <span className={`badge badge-success ${props.name.toLowerCase()}`}>
        {props.name}
      </span>
    </p>
  );
};

export default Type;
