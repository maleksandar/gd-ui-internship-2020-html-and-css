import React, { Component } from "react";
import "./Column.scss";
import Card from "./Card";
import { Droppable, Draggable } from "react-beautiful-dnd";

class Column extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="task-list">
          <h2 className="task-list__title">{this.props.title}</h2>
          <Droppable className="dropabble" droppableId={this.props.title}>
            {(provided, snapshot) => (
              <div
                className="task-list__list"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {this.renderCards()}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </React.Fragment>
    );
  }

  renderCards() {
    return this.props.cards.map((card) => {
      return (
        <Draggable
          draggableId={card.id.toString()}
          index={card.id}
          key={card.id.toString()}
        >
          {(provided, snapshot) => (
            <div
              className="draggable"
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <Card
                handleDelete={this.props.handleDelete}
                handleEdit={this.props.handleEdit}
                card={card}
              />
            </div>
          )}
        </Draggable>
      );
    });
  }
}

export default Column;
