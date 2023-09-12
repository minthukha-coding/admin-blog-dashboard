import React from "react";

function Input(props) {
  return (
    <input
      id={props.id}
      type={props.type}
      className={props.className}
      onChange={props.onChange}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      hidden={props.hidden}
    />
  );
}

export default Input;