import React from "react";

const userInput = (props) => {
  const customStyle = {
    border: "1px dotted red",
    margin: "auto 25%",
  };

  return (
    <input
      style={customStyle}
      type="text"
      onChange={props.zmena}
      value={props.actual}
    />
  );
};

export default userInput;
