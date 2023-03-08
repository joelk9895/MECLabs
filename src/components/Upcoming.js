import React from "react";
import "./styles/upcoming.css";

function Subs({ upsubs }) {
  return (
    <div id="upcoming-Subs">
        <img id='upcoming-logo'src={upsubs.logo}></img>
      <div id="company-details">
        <label id="upcoming-name">{upsubs.name}</label>
        <label id="upcoming-date">{upsubs.date}</label>
      </div>
      <label id="upcoming-price">{upsubs.price}</label>
    </div>
  );
}

export default Subs;
