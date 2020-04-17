import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import {
  Button,
  Modal,
  Grid,
  TextField,
  IconButton
} from '@material-ui/core';

import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';
import CloseIcon from '@material-ui/icons/Close';

import { addCard, deleteCard } from '../actions';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    backgroundColor: '#fff',
    padding: 16,
  },
  textfield: {
    marginBottom: 16,
    width: 220
  },
  grid: {
    display: 'flex',
    paddingTop: 16
  },
  closeButton: {
    position: 'absolute',
    right: 8,
    top: 8,
  },
});

const TrelloModal = (props) => {
  const classes = useStyles();
  const { open, setOpen, cardTitle, cardText, type } = props;

  const [title, setTitle] = useState(cardTitle ? cardTitle : 'New Card');
  const [text, setText] = useState(cardText ? cardText : 'Your text');

  const handleClose = () => {
    setOpen(false);
    // setTitle('New Card');
    // setText('Your text');
  };

  const handleAddCard = () => {
    const { listID, dispatch } = props;

    if (title && text) {
      setTitle('New Card');
      setText('Your text');
      dispatch(addCard(listID, title, text));
      handleClose();
    }
  };

  const handleDeleteCard = () => {
    const { listID, cardID, dispatch } = props;
    dispatch(deleteCard(listID, cardID));
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Grid
          container
          direction="column"
          className={classes.root}
        >
          <TextField
            className={classes.textfield}
            placeholder="Enter a card title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            error={title === ''}
            label="Title"
            helperText={title === '' ? 'Enter a card title!' : ' '}
          />

          <IconButton
            className={classes.closeButton}
            onClick={handleClose}>
            <CloseIcon/>
          </IconButton>

          <TextField
            placeholder="Enter a card text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            helperText={text === '' ? 'Enter a card text!' : ' '}
            error={text === ''}
            label="Text"
            variant="outlined"
            multiline
            fullWidth/>

          <Grid
            container
            justify="space-between"
            alignItems="center"
            className={classes.grid}
          >
            <Button
              onClick={handleDeleteCard}
              variant="text"
              color="secondary"
              startIcon={<DeleteIcon/>}
              disabled={type === 'button'}
            >
              Delete
            </Button>

            <Grid item>
              <Button
                onClick={handleClose}
                variant="text"
                startIcon={<CancelIcon/>}
              >
                Cancel
              </Button>

              <Button
                onClick={handleAddCard}
                variant="text"
                color="primary"
                startIcon={<SaveIcon/>}
                disabled={title === '' || text === ''}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
};

export default connect()(TrelloModal);
