import React, { useState } from 'react';
import { connect } from 'react-redux';

import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';

import TrelloModal from './TrelloModal';

const TrelloActionButton = (props) => {
  const [open, setOpen] = useState(false);

  const { listID, cardsLength } = props;
  const buttonText = cardsLength > 0 ? 'Add another card' : 'Add a card';

  const handleOpenModal = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button
        color="primary"
        variant="text"
        startIcon={<AddIcon/>}
        onMouseDown={handleOpenModal}>
        {buttonText}
      </Button>

      <TrelloModal
        listID={listID}
        open={open}
        setOpen={setOpen}/>
    </div>
  );
};

export default connect()(TrelloActionButton);
