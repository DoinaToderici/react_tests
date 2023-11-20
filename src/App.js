import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import GetByLabelText from "./components/getByLabelText/getByLabelText";
import GetByRole from "./components/getByRole/getByRole";
import Click from "./components/fireEvents/click/Click";
import Submit from "./components/fireEvents/submit/Submit";

function App() {
  return (
    <div className="App">
      <Submit />
    </div>
  );
}

export default App;
