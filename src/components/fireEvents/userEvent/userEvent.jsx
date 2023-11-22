import React, { useState } from "react";

export default function UserEvent() {
  const [cityName, setCityName] = useState("Mumbai");
  return (
    <>
      <select id="selectCity" onChange={(e) => setCityName(e.target.value)}>
        <option> Mumbai</option>
        <option> Bangalore</option>
        <option> Chennai</option>
      </select>

      <h2>{cityName}</h2>
    </>
  );
}
