import React from "react";
import "./UserInput.css"
// import "./UserData.css"

function UserInput({ variableName, defaultVariable, variable, setVariable, formatVariable, error }) {
    const currentYear = new Date().getFullYear();

  return (
    <div className="Testing padding-1 bg-light-gray-5">
      <label htmlFor="{variableName}">{variableName} as of {currentYear}:</label>
      <input className="Padding"
        type="text"
        id="{variableName}"
        placeholder={defaultVariable}
        value={variable}
        onChange={(event) => setVariable(formatVariable(event.target.value))}
      />
      {error && <span type="error">{error}</span>}
    </div>
  );
}

export default UserInput;