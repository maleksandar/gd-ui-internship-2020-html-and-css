import React from 'react';
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

const useStyles = makeStyles({
  root: {
    marginBottom: 8,
    transition: 'all .4s',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
  }
});

const TrelloCard = ({ listID, id, index, title, text, deleteCard }) => {
  const classes = useStyles();

  return (
    <Draggable
      draggableId={String(id)}
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
                variant="h3"
                component="h2"
                gutterBottom
              >
                {title}
              </Typography>

              <Typography
                variant="body2"
                component="p"
                gutterBottom
              >
                {text}
              </Typography>
            </CardContent>

            <CardActions className={classes.buttons}>
              <Button
                color="primary"
                size="small"
                startIcon={<EditIcon/>}
              >
                Edit
              </Button>

              <Button
                color="secondary"
                size="small"
                startIcon={<DeleteIcon/>}
                onClick={() => deleteCard(listID, id)}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      )}
    </Draggable>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteCard: (listID, cardID) => dispatch(deleteCard(listID, cardID))
});

export default connect(null, mapDispatchToProps)(TrelloCard);
