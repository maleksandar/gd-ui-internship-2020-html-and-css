import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import {
  Button,
  Modal,
  Grid
} from '@material-ui/core';

import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { addCard } from '../actions';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: '#fff',
    padding: 16,
  },
  grid: {
    display: 'flex'
  }
});

const TrelloModal = (props) => {
  const classes = useStyles();
  const { open, setOpen } = props;

  const [text, setText] = useState('New Card');

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddCard = () => {
    const { listID, dispatch } = props;

    if (text) {
      setText('');
      dispatch(addCard(listID, text));
      handleClose();
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
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
          >
            Card Title
          </Typography>

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
            item
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

            <Grid
              item
              justify="center"
              alignItems="center"
            >
              <Button
                onClick={handleClose}
                variant="text"
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
