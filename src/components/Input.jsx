import React, { useState } from "react";

const Input = () => {
  const [userInput, setUserInput] = useState("");

  const handleChange = ({ target }) => setUserInput(target.value);

  const numberOfCharactersEntered = () => {
    if (userInput.length > 30) {
      return <p>Over limit!</p>;
    } else if (userInput.length === 0) {
      return <p>No characters entered</p>;
    } else {
      return <p>{`${userInput.length} characters entered`}</p>;
    }
  };

  return (
    <div className="inputContainer">
      <input
        id="userInput"
        type="text"
        value={userInput}
        onChange={handleChange}
        placeholder="Enter text"
        aria-label="Enter text"
      />

      {numberOfCharactersEntered()}
    </div>
  );
};

export default Input;
