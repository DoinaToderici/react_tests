import React, { useState } from "react";

export default function FormUserEvent() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorList = [];
    if (name === "" || password === "" || country === "") {
      errorList.push("Please fill all the details");
    }
    const regex = /^[a-z]*$/i;
    if (!name.match(regex)) {
      errorList.push("Please enter a valid name");
    }
    if (errorList.length != 0) {
      setErrors(errorList);
      setFormSubmitted(false);
      return;
    }
    setErrors([]);
    setFormSubmitted(true);
  };

  return (
    <div>
      <form>
        {errors.map((err, key) => (
          <p key={key} className="text-danger">
            {err}
          </p>
        ))}
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter name"
          required
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter password"
        />
        <label htmlFor="selectCountry"> Select Country </label>
        <select
          id="selectCountry"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        >
          <option>India</option> <option>Japan</option>
          <option>China</option> <option>USA</option>
          <option>England</option>
        </select>
        <button onClick={(e) => handleSubmit(e)}> Submit </button>
      </form>
      {formSubmitted && <p>Form Submitted</p>}
    </div>
  );
}
