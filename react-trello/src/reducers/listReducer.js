import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: `list-${uuidv4()}`,
    title: 'Todo',
    cards: [{
      id: `card-${uuidv4()}`,
      text: 'Create Material UI Card'
    }, {
      id: `card-${uuidv4()}`,
      text: 'Create Redux store'
    }]
  }, {
    id: `list-${uuidv4()}`,
    title: 'In Progress',
    cards: [{
      id: `card-${uuidv4()}`,
      text: 'Set background color'
    }]
  }, {
    id: `list-${uuidv4()}`,
    title: 'Done',
    cards: [{
      id: `card-${uuidv4()}`,
      text: 'Create Edit button'
    }, {
      id: `card-${uuidv4()}`,
      text: 'Create Delete button'
    }, {
      id: `card-${uuidv4()}`,
      text: 'Create Add button'
    }]
  }
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      console.log('[List Reducer]: Add Card action');

      const newCard = {
        id: `card-${uuidv4()}`,
        text: action.payload.text
      };

      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [
              ...list.cards,
              newCard
            ]
          };
        } else {
          return list;
        }
      });

      return newState;
    case 'REMOVE_CARD':
      console.log('[List Reducer]: Remove Card action');
      return state;
    default:
      return state;
  }
};

export default listReducer;
