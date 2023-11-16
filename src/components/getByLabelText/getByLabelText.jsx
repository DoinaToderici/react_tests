import React, { useState } from "react";

export default function GetByLabelText() {
  const [value, setValue] = useState("");

  const handleOnChange = () => {};

  return (
    <div>
      {" "}
      <h1>getByLabelText</h1>
      <form>
        <label htmlFor="input">Enter text:</label>
        <input id="input" type="text" value={value} onChange={handleOnChange} />
      </form>
    </div>
  );
}
