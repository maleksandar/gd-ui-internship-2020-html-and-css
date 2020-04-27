import React, { Component } from "react";
import "./Main.scss";
import Column from "./Column";
import Modal from "./Modal";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
      <DragDropContext onDragEnd={this.onDragEnd}>
        <section className="main">
          <Column
            handleEdit={this.editTask}
            handleDelete={this.deleteTask}
            cards={this.state.cards.toDo}
            title="toDo"
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
            title="done"
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
      </DragDropContext>
    );
  }

  onDragEnd = (result, columns, setColumns) => {
    console.log(result);
    if (!result.destination) {
      return;
    }
    const source = result.source.droppableId;
    const dest = result.destination.droppableId;
    const cardId = Number(result.draggableId);

    let cards = { ...this.state.cards };
    const card = cards[source].find((card) => card.id === cardId);
    cards[source] = cards[source].filter((card) => {
      return card.id !== cardId;
    });
    cards[dest].push(card);

    this.setState({
      cards,
    });
  };

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
