import React, { useState } from "react";

export default function UserEvent() {
  const [cityName, setCityName] = useState("Mumbai");
  const [visibility, setVisibility] = useState(true);
  return (
    <>
      <select id="selectCity" onChange={(e) => setCityName(e.target.value)}>
        <option> Mumbai</option>
        <option> Bangalore</option>
        <option> Chennai</option>
      </select>
      <h2>{cityName}</h2>
      <hr />
      <div className="tooltip">
        <p
          onMouseOver={() => setVisibility(false)}
          onMouseLeave={() => setVisibility(true)}
        >
          Hover over me
        </p>
        <span className="tooltiptext" hidden={visibility}>
          Tooltip text
        </span>
      </div>
    </>
  );
}
