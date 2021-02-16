import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { DragDropContext } from 'react-beautiful-dnd';

import { dragCard } from '../redux/Tasks/tasks.actions';
import TrelloTaskList from './TrelloTaskList';

const useClasess = makeStyles(({
    board: {
        margin: '0 auto',
        flexWrap: 'nowrap', 
        overflowY: 'hidden',
        overflowX: 'auto',
        alignItems: 'flex-start',
        width: '100%',
        minHeight: 'calc(100vh - 4.3rem)',
    },
    column: {
        flex: '0 0 20rem',
    },
}))

function TrelloBoard(props) {
  const classes = useClasess();
  const { tasks, dragCard } = props;
  
  return (
    <DragDropContext onDragEnd={dragCard}>
      <Grid 
        container
        spacing={4}
        className={classes.board}
      >
      {
        Object.keys(tasks).map((listName) => (
          <Grid item className={classes.column} key={listName}>
            <TrelloTaskList title={listName} tasks={tasks[listName]}/>
          </Grid>
        ))
      }
      </Grid>
    </DragDropContext>       
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    dragCard
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(TrelloBoard);