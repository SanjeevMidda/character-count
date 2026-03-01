import React, { useState } from "react";

const Input = () => {
  const [userInput, setUserInput] = useState("");

  const handleChange = ({ target }) => setUserInput(target.value);

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

      <p>
        {userInput.length
          ? `${userInput.length} characters entered`
          : "No characters entered"}
      </p>
    </div>
  );
};

export default Input;
