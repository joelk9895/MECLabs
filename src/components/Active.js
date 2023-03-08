import React from "react";
import "./styles/active.css";

function ActSubs({ acsubs }) {

  return (
    <div id="active-Subs">
    {document.getElementById("active-Subs").style.backgroundColor = acsubs.color}
      <label id="active-price">{acsubs.price}</label>
      <div id="activecompany-details">
        <img id="active-logo" src={acsubs.logo}></img>
        <label id="active-name">{acsubs.name}</label>
      </div>
    </div>
  );
}

export default ActSubs;
