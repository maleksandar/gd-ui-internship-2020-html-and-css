import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import TrelloList from '../components/TrelloList';

import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from '../actions';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 16px',
  },
  row: {
    display: 'flex',
    alignItems: 'flex-start',
    overflow: 'scroll',
  },
  title: {
    textAlign: 'center',
    color: '#fefefe',
    padding: 16
  }
});

const TrelloBoard = (props) => {
  const { lists } = props.lists;
  const classes = useStyles();

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };

  return (
    <div className={classes.container}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Typography
          className={classes.title}
          variant="h3"
          component="h1"
        >
          React Trello Clone
        </Typography>

        <div className={classes.row}>
          {lists.map(list => (
            <TrelloList
              key={list.id}
              id={list.id}
              listID={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

const mapStateToProps = (state) => ({
  lists: state.lists
});

export default connect(mapStateToProps)(TrelloBoard);
