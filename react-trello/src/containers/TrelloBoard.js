import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 16px',
  },
  row: {
    display: 'flex',
    alignItems: 'flex-start',
    overflow: 'scroll',
  },
  title: {
    textAlign: 'center',
    color: '#fefefe',
    padding: 16
  }
});

const TrelloBoard = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography
        className={classes.title}
        variant="h3"
        component="h1">
        React Trello Clone
      </Typography>

      <div className={classes.row}>
        {props.children}
      </div>
    </div>
  );
};

export default TrelloBoard;
