import React from 'react';
import { connect } from 'react-redux';
import { Grid, Container } from '@material-ui/core';
import { DragDropContext } from 'react-beautiful-dnd';
import TaskList from '../components/TaskList';
import { moveTask } from '../redux/Task/task.actions';
import TaskModal from './TaskModal';

const ListContainer = (props) => {
  const { lists, moveTask } = props;
  const keys = Object.keys(lists);
  
  const taskLists = keys.map((key) => {
    const list = lists[key];

    return (
      <TaskList
        key={list.id}
        listId={list.id}
        title={list.title}/>
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

      <TaskModal />

    </Container>
  );
};

const mapStateToProps = (state) => ({
  lists: state.task.lists,
  modal: state.modal
});

const mapDispatchToProps = (dispatch) => ({
  moveTask: (moveResult) => dispatch(moveTask(moveResult)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
