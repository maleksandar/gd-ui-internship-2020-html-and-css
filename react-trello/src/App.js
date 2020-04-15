import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import TrelloBoard from './containers/TrelloBoard';
import TrelloList from './components/TrelloList';

const App = (props) => {
  const { lists } = props;

  return (
    <TrelloBoard>
      {lists.map(list => (
        <TrelloList
          key={list.id}
          id={list.id}
          title={list.title}
          cards={list.cards}/>
      ))}
    </TrelloBoard>
  );
};

const mapStateToProps = (state) => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
