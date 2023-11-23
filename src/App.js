import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import GetByLabelText from "./components/getByLabelText/getByLabelText";
import GetByRole from "./components/getByRole/getByRole";
import Click from "./components/fireEvents/click/Click";
import Submit from "./components/fireEvents/submit/Submit";
import UserEvent from "./components/fireEvents/userEvent/userEvent";
import FormUserEvent from "./components/fireEvents/userEvent/formUserEvent";

function App() {
  return (
    <div className="App">
      <FormUserEvent />
    </div>
  );
}

export default App;
