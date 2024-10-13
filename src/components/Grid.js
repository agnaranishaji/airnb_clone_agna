import React from "react";
export default function Grid(props) {
  let badgeText;
  if (props.x.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.x.region === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="contact-card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card1" src={props.x.image} alt="Main page image" />
      <div className="class1">
        <img className="star" src="../images/star.png" />
        <span>{props.rating}</span>
        <span className="grey">{props.x.rating_count} • </span>
        <span className="grey">{props.x.region}</span>
        <h2 className="h2_element">{props.x.title}</h2>
        <p>
          <b>From ${props.x.price}</b> /person
        </p>
      </div>
    </div>
  );
}
