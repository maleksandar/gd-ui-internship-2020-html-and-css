import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';

import { Droppable } from 'react-beautiful-dnd';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    backgroundColor: '#ebecf0',
    borderRadius: 3,
    padding: 8,
    margin: 16,
    flex: '0 0 300px',
  },
  container: {
    overflowX: 'scroll',
    maxHeight: 600,
  },
  title: {
    padding: '4px 8px'
  }
});

const TrelloList = (props) => {
  const { listID, title, cards } = props;
  const classes = useStyles();

  const trelloCards = cards.map((card, index) => (
    <TrelloCard
      key={card.id}
      cardID={card.id}
      listID={listID}
      index={index}
      title={card.title}
      text={card.text}
    />
  ));

  return (
    <Grid
      item
      className={classes.root}>
      <Droppable droppableId={String(listID)}>
        {(provided) => (
          <Grid
            className={classes.container}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Typography
              className={classes.title}
              variant="h6"
              component="h3"
              gutterBottom
            >
              {title}
            </Typography>

            {trelloCards}
          </Grid>
        )}
      </Droppable>

      <TrelloActionButton
        listID={listID}
        cardsLength={cards.length}/>
    </Grid>
  );
};

export default TrelloList;
