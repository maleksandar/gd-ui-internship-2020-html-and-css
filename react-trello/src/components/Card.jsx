import React, { Component } from "react";
import "./Card.scss";

function Card(props) {
  return (
    <div className="card">
      <div className="card__title">{props.card.title}</div>
      <div className="description-buttons-container">
        <div className="card__description">{props.card.descriptionShort}</div>
        <div className="button-container">
          <button className="button button--action button--edit">E</button>
          <button className="button button--action button--delete">D</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
