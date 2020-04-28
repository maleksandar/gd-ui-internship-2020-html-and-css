import React, { Component } from "react";
import "./Card.scss";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

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
  componentDidMount() {
    console.log("card created", this.props);
  }

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
              <FontAwesomeIcon className="button--action__icon" icon={faEdit} />
            </button>
            <button
              onClick={() => this.props.handleDelete(this.props.card.id)}
              className="button button--action button--delete"
            >
              <FontAwesomeIcon
                className="button--action__icon"
                icon={faTrash}
              />
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
