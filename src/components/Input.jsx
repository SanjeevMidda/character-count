import React, { useState } from "react";

const Input = () => {
  const [charactersEntered, setCharactersEntered] = useState(0);

  return (
    <div className="inputContainer">
      <input type="text" />
      <h3 id="numberCount"> {charactersEntered} characters entered</h3>
    </div>
  );
};

export default Input;
