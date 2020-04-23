import React, { Component } from "react";
import "./Modal.scss";

class Modal extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="modal">
          <input
            type="text"
            className="form-control new-task__title"
            placeholder="Title"
          />

          <textarea
            type="text"
            class="form-control modal__content"
            placeholder="Task description"
          ></textarea>
          <div className="modal__button-container">
            <button className="btn btn-success">Save</button>
            <button>Cancel</button>
          </div>
        </div>
        <div className="modal__overlay"></div>
      </React.Fragment>
    );
  }
}

export default Modal;
