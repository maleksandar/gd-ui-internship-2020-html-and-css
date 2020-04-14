import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
  }
});

const TrelloBoard = (props) => {
  const classes = styles();

  return (
    <div className={classes.container}>
      {props.children}
    </div>
  );
};

export default TrelloBoard;
