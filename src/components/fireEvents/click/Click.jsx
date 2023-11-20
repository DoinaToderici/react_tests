import React, { useState } from "react";

export default function Click() {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <h2>{value}</h2>
      <button onClick={() => setValue("")}>Refresh</button>
    </div>
  );
}
