import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import TaskCard from './TaskCard';

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
    minHeight: '100px',
    maxHeight: '600px',
    width: '400px',
    overflow: 'scroll',
  }
  
});

function TaskList({ id, title, tasks }) {
  const classes = useStyles();
  const taskCards = tasks.map((task, i) => (
    <Draggable key={task.id} draggableId={task.id} index={i}>
      {(provided, snapshot) => (
        <TaskCard 
          key={task.id}
          provided={provided}
          innerRef={provided.innerRef}
          isDragging={snapshot.isDragging}
        {...task} />
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
          m={2}
        >
          {title}
        </Typography>
        <Droppable droppableId={id.toString()}>
          {(provided) => (
            <Grid
              className={classes.taskContainer}
              innerRef={provided.innerRef}
              {...provided.droppableProps}
              container
              direction="column"
              spacing={1}
            >
              {taskCards}
              {provided.placeholder}
            </Grid>
          )}
        </Droppable>
      </Paper>
    </Grid>
  );
}

export default TaskList;
