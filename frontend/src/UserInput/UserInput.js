import React from "react";
import "./UserInput.css"

function UserInput({ variableText, variableSubText, defaultVariable, variable, setVariable, formatVariable, error }) {
    const currentYear = new Date().getFullYear();

  return (
    <div className="Testing">
      <div className="Vertical">
        <label htmlFor="{variableText}">{variableText}</label>
        <text>{variableSubText}</text>
      </div>
      <input className="Padding"
        type="text"
        id="{variableText}"
        placeholder={defaultVariable}
        value={variable}
        onChange={(event) => setVariable(formatVariable(event.target.value))}
      />
      {error && <span type="error">{error}</span>}
    </div>
  );
}

export default UserInput;