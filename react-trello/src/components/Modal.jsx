import React, { Component, lazy } from "react";
import "./Modal.scss";

class Modal extends Component {
  state = {
    title: this.props.data.cardTitle,
    description: this.props.data.cardDescription,
  };
  render() {
    return (
      <React.Fragment>
        <div className={this.getClassesMain()}>
          <input
            type="text"
            className="form-control new-task__title"
            placeholder="Title"
            onChange={(e) => this.updateTitle(e)}
            value={this.state.title}
          />

          <textarea
            type="text"
            className="form-control modal__content"
            placeholder="Task description"
            onChange={(e) => this.updateDescription(e)}
            value={this.state.description}
          ></textarea>
          <div className="modal__button-container">
            <button onClick={() => this.onSave()} className="btn btn-success">
              Save
            </button>
            <button onClick={() => this.onCancel()}>Cancel</button>
          </div>
        </div>
        <div className={this.getClassesOverlay()}></div>
      </React.Fragment>
    );
  }

  onSave() {
    this.props.handleSave(this.state.title, this.state.description);
    this.props.handleCancel();
    if (this.props.data.clearAfterSave) {
      this.resetFields();
    }
  }

  resetFields() {
    this.setState({
      title: this.props.data.cardTitle,
      description: this.props.data.cardDescription,
    });
  }

  onCancel() {
    this.resetFields();
    this.props.handleCancel();
  }

  updateTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  updateDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  getClassesMain() {
    return this.props.data.modal ? "modal modal--active" : "modal";
  }
  getClassesOverlay() {
    return this.props.data.modal
      ? "modal__overlay modal__overlay--active"
      : "modal__overlay";
  }
}

export default Modal;
