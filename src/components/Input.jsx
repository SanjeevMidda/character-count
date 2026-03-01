import React, { useState } from "react";

const Input = () => {
  const [userInput, setuserInput] = useState("");
  const [numberOfCharacters, setNumberOfCharacters] = useState(0);

  return (
    <div className="inputContainer">
      <input
        type="text"
        value={userInput}
        onChange={characterLength}
        placeholder="enter text"
      />
      <h3 id="numberCount"> {characterLength} characters entered</h3>
    </div>
  );
};

export default Input;
