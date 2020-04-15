import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import TrelloList from '../components/TrelloList';

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
  const { lists } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography
        className={classes.title}
        variant="h3"
        component="h1"
      >
        React Trello Clone
      </Typography>

      <div className={classes.row}>
        {lists.map(list => (
          <TrelloList
            key={list.id}
            id={list.id}
            listID={list.id}
            title={list.title}
            cards={list.cards}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  lists: state.lists
});

export default connect(mapStateToProps)(TrelloBoard);
