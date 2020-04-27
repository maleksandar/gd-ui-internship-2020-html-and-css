import React, { Component } from "react";
import "./Column.scss";
import Card from "./Card";

class Column extends Component {
  render() {
    return (
      <div className="task-list">
        <h2 className="task-list__title">{this.props.title}</h2>
        {this.renderCards()}
      </div>
    );
  }

  renderCards() {
    return this.props.cards.map((card) => {
      return (
        <Card
          handleDelete={this.props.handleDelete}
          handleEdit={this.props.handleEdit}
          card={card}
        />
      );
    });
  }
}

export default Column;
