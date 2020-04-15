import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';

import { Droppable } from 'react-beautiful-dnd';

const useStyles = makeStyles({
  container: {
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
        <div
          className={classes.container}
          {...provided.dragHandleProps}
          ref={provided.innerRef}>
          <Typography
            className={classes.title}
            variant="h6"
            component="h3"
            gutterBottom>
            {title}
          </Typography>
          {cards.map((card, index) => (
            <TrelloCard
              key={card.id}
              id={card.id}
              index={index}
              text={card.text}/>
          ))}
          <TrelloActionButton listID={listID} cardsLength={cards.length}/>
        </div>
      )}
    </Droppable>
  );
};

export default TrelloList;
