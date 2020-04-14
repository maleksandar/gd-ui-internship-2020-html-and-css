import React from 'react';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  makeStyles
} from '@material-ui/core';

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

const TrelloCard = ({title, text}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h3" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          {text}
        </Typography>
      </CardContent>
      <CardActions className={classes.buttons}>
        <Button variant="contained" color="primary" size="small">Edit</Button>
        <Button variant="contained" color="secondary" size="small">Delete</Button>
      </CardActions>
    </Card>
  );
};

export default TrelloCard;
