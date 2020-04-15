import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { Draggable } from 'react-beautiful-dnd';

const useStyles = makeStyles({
  root: {
    marginBottom: 8
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

const TrelloCard = ({ id, index, title, text }) => {
  const classes = useStyles();

  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                variant="h3"
                component="h2"
                gutterBottom>
                {title}
              </Typography>

              <Typography
                variant="body2"
                component="p"
                gutterBottom>
                {text}
              </Typography>
            </CardContent>

            <CardActions className={classes.buttons}>
              <Button
                color="primary"
                size="small"
                startIcon={<EditIcon/>}>
                Edit
              </Button>

              <Button
                color="secondary"
                size="small"
                startIcon={<DeleteIcon/>}>
                Delete
              </Button>
            </CardActions>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default TrelloCard;
