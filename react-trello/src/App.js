import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import TrelloBoard from './containers/TrelloBoard';
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from './actions';

const App = (props) => {
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <TrelloBoard/>
    </DragDropContext>
  );
};

const mapStateToProps = (state) => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
