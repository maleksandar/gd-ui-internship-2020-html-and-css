import React from 'react';
import { connect } from 'react-redux';
import { Grid, Container } from '@material-ui/core';
import { DragDropContext } from 'react-beautiful-dnd';
import TaskList from '../components/TaskList';
import { moveTask } from '../redux/TaskList/taskList.actions';


const ListContainer = ({ lists, tasks, moveTask }) => {
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
    </Container>
  );
};

const mapStateToProps = (state) => ({
  lists: state.taskList.lists,
  tasks: state.task.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  moveTask: (moveResult) => dispatch(moveTask(moveResult)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
