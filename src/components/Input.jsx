import React, { useState } from "react";

const Input = () => {
  const [userInput, setuserInput] = useState("");

  const updateInput = (e) => {
    setuserInput(e.target.value);
  };

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
