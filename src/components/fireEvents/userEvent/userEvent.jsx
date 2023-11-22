import React, { useState } from "react";

export default function UserEvent() {
  const [cityName, setCityName] = useState("Mumbai");
  const [visibility, setVisibility] = useState(true);

  return (
    <>
      <div className="selectOptionsTest">
        <select id="selectCity" onChange={(e) => setCityName(e.target.value)}>
          <option> Mumbai</option>
          <option> Bangalore</option>
          <option> Chennai</option>
        </select>
        <h2>{cityName}</h2>
      </div>
      <hr />
      <div className="hoverTest">
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
      <hr />
      <div className="uploadTest">
        <label htmlFor="singleFile">Upload File :</label>
        <input type="file" id="singleFile" data-testid="inputFile" />
      </div>
    </>
  );
}
