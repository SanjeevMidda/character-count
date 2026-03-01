import React, { useState } from "react";

const Input = () => {
  const [userInput, setUserInput] = useState("");

  const updateInput = ({ target }) => setUserInput(target.value);

  return (
    <div className="inputContainer">
      <input
        type="text"
        value={userInput}
        onChange={updateInput}
        placeholder="enter text"
      />
      <h3 id="numberCount"> {userInput.length} characters entered</h3>
    </div>
  );
};

export default Input;
