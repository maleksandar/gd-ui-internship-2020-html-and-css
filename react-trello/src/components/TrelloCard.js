import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { Draggable } from 'react-beautiful-dnd';
import { deleteCard } from '../actions';
import TrelloModal from './TrelloModal';

const useStyles = makeStyles({
  root: {
    marginBottom: 8,
    transition: 'all .4s',
  },
  title: {
    fontWeight: 'bold',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
  }
});

const TrelloCard = ({ listID, cardID, index, title, text, deleteCard }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleTextLength = (text) => {
    const CHAR_LIMIT = 200;

    if (text.length > CHAR_LIMIT) {
      return `${text.substring(0, CHAR_LIMIT - 3)}...`;
    }

    return text;
  };

  return (
    <div>
      <Draggable
        draggableId={String(cardID)}
        index={index}
      >
        {(provided) => (
          <Grid
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  variant="h6"
                  component="h4"
                  gutterBottom
                >
                  {title}
                </Typography>

                <Typography
                  variant="body2"
                  component="p"
                >
                  {handleTextLength(text)}
                </Typography>
              </CardContent>

              <CardActions className={classes.buttons}>
                <Button
                  color="primary"
                  size="small"
                  startIcon={<EditIcon/>}
                  onMouseDown={handleOpenModal}
                >
                  Edit
                </Button>

                <Button
                  color="secondary"
                  size="small"
                  startIcon={<DeleteIcon/>}
                  onClick={() => deleteCard(listID, cardID)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        )}
      </Draggable>

      <TrelloModal
        listID={listID}
        cardID={cardID}
        open={open}
        setOpen={setOpen}
        cardTitle={title}
        cardText={text}
        type="edit"
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteCard: (listID, cardID) => dispatch(deleteCard(listID, cardID))
});

export default connect(null, mapDispatchToProps)(TrelloCard);
