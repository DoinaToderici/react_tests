import React, { useState } from "react";

export default function GetByRole() {
  const [content, setContent] = useState("😃");
  return (
    <div>
      <button onClick={() => setContent(content == "😃" ? "😞" : "😃")}>
        {content}
      </button>
    </div>
  );
}
