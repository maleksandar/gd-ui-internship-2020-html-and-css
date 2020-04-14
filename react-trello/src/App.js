import React from 'react';
import './App.css';

import TrelloList from './components/TrelloList';
import TrelloCard from './components/TrelloCard';
import TrelloBoard from './containers/TrelloBoard';

const App = () => {
  return (
    <TrelloBoard>
      <TrelloList title="Todo">
        <TrelloCard
          title="Trello Card 1"
          text="Text description 1"/>

        <TrelloCard
          title="Trello Card 2"
          text="Text description 2"/>
      </TrelloList>

      <TrelloList title="In Progress">
        <TrelloCard
          title="Trello Card 1"
          text="Text description 1"/>
      </TrelloList>

      <TrelloList title="Done">
        <TrelloCard
          title="Trello Card 1"
          text="Text description 1"/>

        <TrelloCard
          title="Trello Card 2"
          text="Text description 2"/>

        <TrelloCard
          title="Trello Card 3"
          text="Text description 3"/>
      </TrelloList>
    </TrelloBoard>
  );
};

export default App;
