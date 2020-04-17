import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';

import { Droppable } from 'react-beautiful-dnd';

const useStyles = makeStyles({
  container: {
    position: 'relative',
    backgroundColor: '#ebecf0',
    borderRadius: 3,
    flex: '0 0 300px',
    padding: 8,
    margin: 16,
    overflowX: 'scroll',
    maxHeight: 600,
  },
  title: {
    padding: '4px 8px'
  }
});

const TrelloList = ({ listID, title, cards }) => {
  const classes = useStyles();

  return (
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

          {cards.map((card, index) => (
            <TrelloCard
              key={card.id}
              id={card.id}
              listID={listID}
              index={index}
              title={card.title}
              text={card.text}
            />
          ))}

          <TrelloActionButton
            listID={listID}
            cardsLength={cards.length}
          />
        </Grid>
      )}
    </Droppable>
  );
};

export default TrelloList;
