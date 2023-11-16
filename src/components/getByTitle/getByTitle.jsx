import React, { useState } from "react";

export default function GetByTitle() {
  const [titleValue, setTitleValue] = useState("title");

  return (
    <div>
      {" "}
      <button
        title={titleValue}
        onClick={() => {
          setTitleValue("new title");
        }}
      >
        Click here
      </button>
    </div>
  );
}
