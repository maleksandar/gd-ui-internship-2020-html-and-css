import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, Typography, CardContent, CardActions, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(({
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between'
  },

}));

function Task(props) {
  const clasess = useStyles();

  return (
    <Grid item>
      <Card>
        <CardContent>
          <Typography
            variant="h6"
            gutterBottom>
            {props.title}
          </Typography>

          <Typography
            variant="body1">
            {props.description}
          </Typography>
        </CardContent>

        <CardActions className={clasess.cardActions}>
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
    </Grid>
  )
}

export default Task;