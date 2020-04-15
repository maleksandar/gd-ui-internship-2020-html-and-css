import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';

import { connect } from 'react-redux';
import { addCard } from '../actions';

const TrelloActionButton = (props) => {
  const [text, setText] = useState('New Card');

  const { cardsLength } = props;
  const buttonText = cardsLength > 0 ? 'Add another card' : 'Add a card';

  const handleAddCard = () => {
    const { listID, dispatch } = props;

    if (text) {
      setText('');
      dispatch(addCard(listID, text));
    }
  };

  return (
    <Button
      color="primary"
      variant="text"
      startIcon={<AddIcon/>}
      onMouseDown={handleAddCard}>
      {buttonText}
    </Button>
  );
};

export default connect()(TrelloActionButton);
