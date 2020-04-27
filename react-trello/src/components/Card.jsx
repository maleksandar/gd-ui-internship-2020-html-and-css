import React, { Component } from "react";
import "./Card.scss";
import Modal from "./Modal";

class Card extends Component {
  state = {
    editTaskData: {
      modal: false,
      title: "Edit this task",
      cardDescription: this.props.card.description,
      cardTitle: this.props.card.title,
      clearAfterSave: false,
    },
  };

  render() {
    const { title, id, description, descriptionShort } = this.props.card;
    return (
      <div className="card">
        <div className="card__title">{title}</div>
        <div className="description-buttons-container">
          <div className="card__description">{descriptionShort}</div>
          <div className="button-container">
            <button
              onClick={() => this.toggleEditModal()}
              className="button button--action button--edit"
            >
              E
            </button>
            <button
              onClick={() => this.props.handleDelete(this.props.card.id)}
              className="button button--action button--delete"
            >
              D
            </button>
          </div>
        </div>
        <Modal
          data={this.state.editTaskData}
          handleCancel={() => this.toggleEditModal()}
          handleSave={(title, description) =>
            this.props.handleEdit(title, description, this.props.card.id)
          }
        />
      </div>
    );
  }

  toggleEditModal() {
    let editTaskData = { ...this.state.editTaskData };
    editTaskData.modal = !editTaskData.modal;
    this.setState({
      editTaskData,
    });
  }
}

export default Card;
