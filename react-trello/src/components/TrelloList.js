import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TrelloCard from './TrelloCard';

import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#ebecf0',
    borderRadius: 3,
    flex: '0 0 300px',
    padding: 8,
    margin: 16,
    overflowX: 'scroll',
    minHeight: 200,
    maxHeight: 600,
  },
  title: {
    padding: '4px 8px'
  }
});

const TrelloList = ({ id, title, cards }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography
        className={classes.title}
        variant="h6"
        component="h3"
        gutterBottom>
        {title}
      </Typography>
      {cards.map(card => (
        <TrelloCard
          key={card.id}
          id={card.id}
          text={card.text}/>
      ))}
      <Button
        color="primary"
        variant="text"
        startIcon={<AddIcon/>}>
        Add another card
      </Button>
    </div>
  );
};

export default TrelloList;
