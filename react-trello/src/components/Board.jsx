import React from "react";
import { Grid } from '@material-ui/core';
import TaskList from './TaskList';
import { makeStyles } from "@material-ui/styles";
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { dragCard } from '../redux/Tasks/tasks.actions';

const useClasess = makeStyles(({
    board: {
        margin: '0 auto',
        flexWrap: 'nowrap', 
        overflow: 'scroll',
        alignItems: 'flex-start',
    },
    column: {
        flex: '0 0 20rem',
    }
}))

function Board(props) {
  const classes = useClasess();
  
  return (
    <DragDropContext onDragEnd={props.dragCard}>
      <Grid 
        container 
        spacing={4}
        className={classes.board}>
        <Grid item className={classes.column}>
          <TaskList title="TODO" tasks={props.tasks['TODO']}/>
        </Grid>
        <Grid item className={classes.column}>
          <TaskList title="IN PROGRESS" tasks={props.tasks['IN PROGRESS']}/>
        </Grid>
        <Grid item className={classes.column}>
          <TaskList title="DONE" tasks={props.tasks['DONE']}/>
        </Grid>
      </Grid>
    </DragDropContext>       
  )
}

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

const mapDispatchToProps = (dispatch) => ({
  dragCard: (result) => dispatch(dragCard(result)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Board);