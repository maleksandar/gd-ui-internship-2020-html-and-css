import React from 'react';
import { connect } from 'react-redux'
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { makeStyles } from '@material-ui/core/styles';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import TrelloCard from '../TrelloCard';
import { toggleModal } from '../TrelloModal/actions'

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
    maxHeight: '550px',
    width: '330px',
    marginBottom: '5px',
    overflow: 'scroll',
  }
  
});

function TaskList(props) {
  const classes = useStyles();
  const { list, tasks, toggleModal } = props;
  const taskIds = list.taskIds;
  const tasksInList = taskIds.map(taskId => tasks[taskId]);

  const taskCards = tasksInList.map((task, i) => (
    <Draggable key={task.id} draggableId={task.id} index={i}>
      {(provided, snapshot) => (
        <TrelloCard 
          key={task.id}
          listId={list.id}
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

        <Droppable droppableId={list.id.toString()}>
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
          onClick={() => toggleModal(list.id)}>
          Add a new Task
        </Button>

      </Paper>
    </Grid>
  );
}
const mapStateToProps = (state) => ({
  tasks: state.board.tasks
})

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (listId) => dispatch(toggleModal(null, listId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
