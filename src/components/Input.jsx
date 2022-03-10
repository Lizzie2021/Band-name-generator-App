import React from "react";

export default function Input(props) {
  return (
    <input
      name={props.name}
      type="text"
      placeholder={props.placeholder}
      onChange={props.onAdd}
      value={props.value}
    />
  );
}
