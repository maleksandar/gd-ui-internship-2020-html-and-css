import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import {
  Button,
  Modal,
  Grid,
  TextField
} from '@material-ui/core';

import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';

import Typography from '@material-ui/core/Typography';

import { addCard } from '../actions';

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
  }
});

const TrelloModal = (props) => {
  const classes = useStyles();
  const { open, setOpen } = props;

  const [title, setTitle] = useState('New Card');
  const [text, setText] = useState('Your text');

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddCard = () => {
    const { listID, dispatch } = props;

    console.log('TEXT:', text);

    if (title && text) {
      setText('');
      dispatch(addCard(listID, title, text));
      handleClose();
    } else {
      console.error('Enter title and text!');
    }
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
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            error={title === ''}
            label="Title"
            helperText={title === '' ? 'Empty field!' : ' '}/>

          <Typography
            variant="body2"
            component="p"
            gutterBottom
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem et eveniet harum illo, itaque iusto magnam
            minima molestiae, quis, quos recusandae veniam voluptate voluptatum! Accusantium ducimus eius excepturi
            nihil nisi quae vitae. A aperiam aut, consequatur earum eum eveniet excepturi facilis harum itaque minima,
            odio quia quod reiciendis tempore voluptates.
          </Typography>

          <Grid
            container
            justify="space-between"
            alignItems="center"
            className={classes.grid}
          >
            <Button
              onClick={handleClose}
              variant="text"
              color="secondary"
              startIcon={<DeleteIcon/>}
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
