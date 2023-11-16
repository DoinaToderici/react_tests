import React, { useState } from "react";

export default function GetByPlaceholderText() {
  const [value, setValue] = useState("");

  const handleOnChange = () => {};

  return (
    <div>
      {" "}
      <h1>GetByPlaceholderText</h1>
      <form>
        <label htmlFor="input">Enter text:</label>
        <input
          id="input"
          type="text"
          value={value}
          onChange={handleOnChange}
          placeholder="Enter your text"
        />
      </form>
    </div>
  );
}
