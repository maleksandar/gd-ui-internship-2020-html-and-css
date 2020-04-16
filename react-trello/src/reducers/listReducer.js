import { v4 as uuidv4 } from 'uuid';

const initialState = {
  lists: [
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
  ]
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CARD': {
      const newCard = {
        id: `card-${uuidv4()}`,
        text: action.payload.text
      };

      return {
        lists: state.lists.map(list => {
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
        })
      };
    }
    case 'DRAG_CARD': {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd
      } = action.payload;

      const newState = { ...state };

      // Drag inside same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.lists.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      // Drag between lists
      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state.lists.find(list => droppableIdStart === list.id);
        const card = listStart.cards.splice(droppableIndexStart, 1);
        const listEnd = state.lists.find(list => droppableIdEnd === list.id);
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;
    }
    case 'DELETE_CARD': {
      const newState = { ...state };
      const { lists } = newState;
      const listIndex = lists.findIndex(list => action.payload.listID === list.id);
      const cardIndex = lists[listIndex].cards.findIndex(card => card.id === action.payload.cardID);
      lists[listIndex].cards.splice(cardIndex, 1);
      return newState;
    }
    default:
      return state;
  }
};

export default listReducer;
