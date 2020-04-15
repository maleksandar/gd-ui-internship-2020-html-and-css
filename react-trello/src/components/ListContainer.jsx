import React from 'react';
import { connect } from 'react-redux';
import { Grid, Container } from '@material-ui/core';
import { DragDropContext } from 'react-beautiful-dnd';
import TaskList from '../components/TaskList';
import { moveTask } from '../redux/Task/task.actions';
import TaskModal from './TaskModal';

const ListContainer = ({ lists, tasks, moveTask, modal }) => {
  const keys = Object.keys(lists);
  const taskLists = keys.map((key) => {
    const list = lists[key];
    const listTasks = list.taskIDs.map((taskID) => tasks[taskID]);
    return (
      <TaskList key={list.id} id={list.id} title={list.title} tasks={listTasks} />
    );
  });
  return (
    <Container maxWidth="xl">
      <Grid container alignItems="flex-start" justify="space-between">
        <DragDropContext onDragEnd={moveTask}>
          {taskLists}
        </DragDropContext>
      </Grid>
      <TaskModal />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  lists: state.task.lists,
  tasks: state.task.tasks,
  modal: state.modal
});

const mapDispatchToProps = (dispatch) => ({
  moveTask: (moveResult) => dispatch(moveTask(moveResult)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
