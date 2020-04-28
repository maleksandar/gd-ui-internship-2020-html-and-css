import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    animation: 'none'
  },
});

const Spinner = () => {
  const classes = useStyles();
  return (
    <CircularProgress
      className={classes.root} 
      color="secondary"
      size="200px" />
  )
}

export default Spinner
