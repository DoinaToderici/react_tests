import React from "react";

export default function GetByDisplayValue() {
  return (
    <form>
      <label htmlFor="input">Enter text:</label>
      <input
        id="input"
        type="text"
        value="new value"
        placeholder="Enter your text"
      />
    </form>
  );
}
