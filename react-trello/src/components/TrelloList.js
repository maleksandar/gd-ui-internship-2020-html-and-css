import React from 'react';
import {Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles({
  container: {
    backgroundColor: '#ebecf0',
    borderRadius: 3,
    width: 300,
    padding: 8,
    margin: 16,
    overflow: 'hidden',
    minHeight: 200,
    maxHeight: 600,
  },
  listTitle: {
    padding: '4px 8px'
  }
});

const TrelloList = (props) => {
  const classes = styles();

  return (
    <div className={classes.container}>
      <Typography className={classes.listTitle} variant="h6" component="h3" gutterBottom>
        {props.title}
      </Typography>
      {props.children}
    </div>
  );
};

export default TrelloList;
