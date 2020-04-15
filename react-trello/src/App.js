import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import TrelloBoard from './containers/TrelloBoard';
import { DragDropContext } from 'react-beautiful-dnd';

const App = () => {
  const onDragEnd = () => {

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
