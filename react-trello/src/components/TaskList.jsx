import React from 'react';
import { connect } from 'react-redux'
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { makeStyles } from '@material-ui/core/styles';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import { toggleModal } from '../redux/TaskModal/taskModal.actions'

const useStyles = makeStyles({
  paper: {
    backgroundColor: '#ebecf0',
    padding: '5px',
  },
  listTitle: {
    margin: '10px',
  },
  taskContainer: {
    flexWrap: 'nowrap',
    minHeight: '50px',
    maxHeight: '600px',
    width: '400px',
    marginBottom: '5px',
    overflow: 'scroll',
  }
  
});

function TaskList(props) {
  const classes = useStyles();
  const {listId, tasks, lists, toggleModal} = props;
  const list = lists[listId];
  const taskIds = list.taskIds;
  const tasksInList = taskIds.map(taskId => tasks[taskId]);

  const taskCards = tasksInList.map((task, i) => (
    <Draggable key={task.id} draggableId={task.id} index={i}>
      {(provided, snapshot) => (
        <TaskCard 
          key={task.id}
          listId={listId}
          provided={provided}
          innerRef={provided.innerRef}
          isDragging={snapshot.isDragging}
          task={task}
        />
      )}
    </Draggable>
  ));

  return (
    <Grid item>
      <Paper className={classes.paper}>

        <Typography
          className={classes.listTitle}
          variant="h6"
          component="h3"
          m={2}>
          {list.title}
        </Typography>

        <Droppable droppableId={listId.toString()}>
          {(provided) => (
            <Grid
              className={classes.taskContainer}
              innerRef={provided.innerRef}
              {...provided.droppableProps}
              container
              direction="column"
              spacing={1}>
              {taskCards}
              {provided.placeholder}
            </Grid>
          )}
        </Droppable>

        <Button
          fullWidth
          color="primary"
          variant="text"
          startIcon={<AddBoxIcon/>}
          onClick={() => toggleModal(listId)}>
          Add a new Task
        </Button>

      </Paper>
    </Grid>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (listId) => dispatch(toggleModal(null, listId)),
});

const mapStateToProps = (state) => ({
  tasks: state.task.tasks,
  lists: state.task.lists
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
