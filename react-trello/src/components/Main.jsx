import React, { Component } from "react";
import "./Main.scss";
import Column from "./Column";
import Modal from "./Modal";

class Main extends Component {
  state = {
    cards: Array(3).fill([
      {
        title: "test card",
        description: "This is a text card",
        descriptionShort: "This is...",
      },
    ]),
    inputText: "",
  };

  render() {
    return (
      <section className="main">
        <Column cards={this.state.cards[0]} title="ToDo" />
        <Column cards={this.state.cards[1]} title="inProgress" />
        <Column cards={this.state.cards[2]} title="Done" />
        <button className="button button--add">
          <span>+</span>
        </button>
        <Modal />
        <Modal />
      </section>
    );
  }

  handleEditCard() {
    console.log("handleEditCard");
  }
  handleNewCard() {
    console.log("handleNewCard");
  }
  handleDeleteCard() {
    console.log("handleDeleteCard");
  }
  handleMoveCard() {
    console.log("handleMoveCard");
  }
}

export default Main;
