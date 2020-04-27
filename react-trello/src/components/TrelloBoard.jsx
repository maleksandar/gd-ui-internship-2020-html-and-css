import React from 'react';
import TrelloTaskList from './TrelloTaskList';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { DragDropContext } from 'react-beautiful-dnd';
import { dragCard } from '../redux/Tasks/tasks.actions';

const useClasess = makeStyles(({
    TrelloBoard: {
        margin: '0 auto',
        flexWrap: 'nowrap', 
        overflow: 'scroll',
        alignItems: 'flex-start',
        width: '100%',
    },
    column: {
        flex: '0 0 20rem',
    },
}))

function TrelloBoard(props) {
  const classes = useClasess();
  const { tasks } = props;
  
  return (
    <DragDropContext onDragEnd={props.dragCard}>
      <Grid 
        container
        spacing={4}
        className={classes.TrelloBoard}>
        <Grid item className={classes.column}>
          <TrelloTaskList title='TODO' tasks={tasks['TODO']}/>
        </Grid>
        <Grid item className={classes.column}>
          <TrelloTaskList title='IN PROGRESS' tasks={tasks['IN PROGRESS']}/>
        </Grid>
        <Grid item className={classes.column}>
          <TrelloTaskList title='DONE' tasks={tasks['DONE']}/>
        </Grid>
      </Grid>
    </DragDropContext>       
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

const mapDispatchToProps = (dispatch) => ({
  dragCard: (result) => dispatch(dragCard(result)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrelloBoard);