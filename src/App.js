import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import GetByLabelText from "./components/getByLabelText/getByLabelText";
import GetByRole from "./components/getByRole/getByRole";

function App() {
  return (
    <div className="App">
      <GetByRole />
    </div>
  );
}

export default App;
