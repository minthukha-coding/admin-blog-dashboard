import React from "react";

function Input(props) {
  return (
    <input
      type={props.type}
      className={props.className}
      onChange={props.onChange}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
}

export default Input;
