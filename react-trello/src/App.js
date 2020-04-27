import React from 'react';
import TrelloBoard from './components/TrelloBoard';
import image from './red-fruit-handing-on-tree-branch.jpg';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundImage:`url(${image})`,
    backgroundSize: 'cover',
    height: '100vh',
  },
  title: {
    textAlign: 'center',
    padding: '1rem',
    textTransform: 'uppercase',
  },
});

function App() {
  const classes = useStyles();
  
  const title = 'Trello React';

  return (
    <div className={classes.root}>
      <Typography
        className={classes.title}
        variant='h4'
        component='h1'>
        {title}
      </Typography>
      <TrelloBoard/>
    </div>
  );
}

export default App;
