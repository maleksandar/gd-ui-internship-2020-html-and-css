import React, { Component } from "react";
import "./Main.scss";
import Column from "./Column";
import Modal from "./Modal";

class Main extends Component {
  state = {
    lastId: 0,

    cards: {
      toDo: [],
      inProgress: [],
      done: [],
    },

    newTaskData: {
      modal: false,
      title: "Create new task",
      cardDescription: "",
      cardTitle: "",
      clearAfterSave: true,
    },
  };

  render() {
    return (
      <section className="main">
        <Column
          handleEdit={this.editTask}
          handleDelete={this.deleteTask}
          cards={this.state.cards.toDo}
          title="ToDo"
        />
        <Column
          handleEdit={this.editTask}
          handleDelete={this.deleteTask}
          cards={this.state.cards.inProgress}
          title="inProgress"
        />
        <Column
          handleEdit={this.editTask}
          handleDelete={this.deleteTask}
          cards={this.state.cards.done}
          title="Done"
        />
        <button
          className="button button--add"
          onClick={(e) => this.toggleNewModal(e)}
        >
          <span>+</span>
        </button>
        <Modal
          data={this.state.newTaskData}
          handleCancel={(e) => this.toggleNewModal(e)}
          handleSave={this.saveNewTask}
        />
      </section>
    );
  }

  deleteTask = (id) => {
    let toDo = this.state.cards.toDo.filter((card) => {
      return !(card.id === id);
    });
    let inProgress = this.state.cards.inProgress.filter((card) => {
      return !(card.id === id);
    });
    let done = this.state.cards.done.filter((card) => {
      return !(card.id === id);
    });
    const cards = {
      toDo,
      inProgress,
      done,
    };
    this.setState({
      cards,
    });
  };

  editTask = (title, description, id) => {
    let toDo = this.state.cards.toDo.map((card) => {
      if (card.id === id) {
        card.description = description;
        card.title = title;
        card.descriptionShort = this.shortenDescription(description);
      }
      return card;
    });
    let inProgress = this.state.cards.inProgress.map((card) => {
      if (card.id === id) {
        card.description = description;
        card.title = title;
        card.descriptionShort = this.shortenDescription(description);
      }
      return card;
    });
    let done = this.state.cards.done.map((card) => {
      if (card.id === id) {
        card.description = description;
        card.title = title;
        card.descriptionShort = this.shortenDescription(description);
      }
      return card;
    });
    const cards = {
      toDo,
      inProgress,
      done,
    };
    this.setState({
      cards,
    });
  };

  saveNewTask = (title, description) => {
    let descriptionShort = this.shortenDescription(description);
    let cards = { ...this.state.cards };
    cards.toDo.push({
      title: title,
      description: description,
      descriptionShort: descriptionShort,
      id: this.state.lastId,
    });
    let lastId = this.state.lastId + 1;
    this.setState({
      cards,
      lastId,
    });
  };

  shortenDescription(description) {
    return description.length < 200
      ? description
      : description.substr(0, 200) + "...";
  }

  toggleNewModal() {
    let newTaskData = { ...this.state.newTaskData };
    newTaskData.modal = !this.state.newTaskData.modal;
    this.setState({
      newTaskData,
    });
  }
}

export default Main;
