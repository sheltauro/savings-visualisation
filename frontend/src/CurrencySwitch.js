import React from "react";
import "./App.css";

function CurrencySwitch({ isChecked, handleToggle }) {


  return (
    <div className="container">
      <div className="switch-holder">
        <div className="switch-label">
          <span>INR(₹) or USD($)</span>
          <div className="switch-toggle">
            <input
              type="checkbox"
              id="bluetooth"
              checked={isChecked}
              onChange={handleToggle}
            />
            <label htmlFor="bluetooth"></label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencySwitch;
