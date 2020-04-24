import React from 'react';
import { connect } from 'react-redux';
import { Grid, Container } from '@material-ui/core';
import { DragDropContext } from 'react-beautiful-dnd';
import TrelloList from '../TrelloList';
import { moveTask } from './actions';
import TrelloModal from '../TrelloModal';

const ListContainer = (props) => {
  const { lists, moveTask } = props;
  const keys = Object.keys(lists);
  
  const taskLists = keys.map((key) => {
    const list = lists[key];

    return (
      <TrelloList
        key={list.id}
        list={list}/>
    );
  });

  return (
    <Container
      maxWidth="xl">

      <Grid 
        container
        style={{flexWrap:'nowrap'}}
        spacing={7} 
        alignItems="flex-start">

        <DragDropContext
          onDragEnd={moveTask}>
          {taskLists}
        </DragDropContext>

      </Grid>

      <TrelloModal />
      
    </Container>
  );
};

const mapStateToProps = (state) => ({
  lists: state.board.lists,
  modal: state.modal
});

const mapDispatchToProps = (dispatch) => ({
  moveTask: (moveResult) => dispatch(moveTask(moveResult)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
