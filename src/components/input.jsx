import React from "react";

const Input = ({ className = "mb-3", ...rest }) => (
  <input type="text" className={`form-control ${className}`} {...rest} />
);

export default Input;
