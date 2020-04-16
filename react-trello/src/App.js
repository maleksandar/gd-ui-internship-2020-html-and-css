import React from 'react';
import { Typography } from '@material-ui/core'
import TrelloBoard from './components/TrelloBoard';

function App() {
  return (
    <div>
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        component="h1">
        Trello App
      </Typography>
      <TrelloBoard/>
    </div>
  );
}

export default App;
