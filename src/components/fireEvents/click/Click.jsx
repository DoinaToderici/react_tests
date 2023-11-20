import React, { useState } from "react";

export default function Click() {
  const [content, setContent] = useState("Hello");
  return (
    <div>
      <button onClick={() => setContent(content == "Hello" ? "Bye" : "Hello")}>
        {content}
      </button>
    </div>
  );
}
