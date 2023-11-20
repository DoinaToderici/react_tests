import React, { useState } from "react";

export default function Submit() {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    setText(value);
    setValue("");
  };
  return (
    <>
      <form data-testid="form" onSubmit={(e) => submitForm(e)}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            setValue("");
            setText("");
          }}
        >
          Refresh
        </button>
      </form>
      <p data-testid="paragraphe">{text}</p>
    </>
  );
}
