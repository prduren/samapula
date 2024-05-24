import React from "react";

const Button = ({ buttonName }) => {
  return (
    <button type="button" className="btn btn-primary">
      {buttonName}
    </button>
  );
};

export default Button;
