import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';

const TrelloActionButton = (props) => {
  const { cardsLength } = props;
  const buttonText = cardsLength > 0 ? 'Add another card' : 'Add a card';

  return (
    <Button
      color="primary"
      variant="text"
      startIcon={<AddIcon/>}>
      {buttonText}
    </Button>
  );
};

export default TrelloActionButton;
