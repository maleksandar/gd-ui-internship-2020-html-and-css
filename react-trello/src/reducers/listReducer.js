import { v4 as uuidv4 } from 'uuid';
import { ACTION_TYPES } from '../actions';

const initialState = {
  lists: [
    {
      id: `list-${uuidv4()}`,
      title: 'Todo',
      cards: [{
        id: `card-${uuidv4()}`,
        title: 'Create Material UI Card',
        text: 'The card description preview should not contain more than 200 characters. In case the card has more than 200, shorten it with an ellipsis, but enable full-text visibility on editing the card in the modal dialog.'
      }, {
        id: `card-${uuidv4()}`,
        title: 'Create Redux store',
        text: 'Lorem ipsum dolor sit amet, da adipisicine veniam voluptate voluptatum!'
      }]
    }, {
      id: `list-${uuidv4()}`,
      title: 'In Progress',
      cards: [{
        id: `card-${uuidv4()}`,
        title: 'Set background color',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias labore magni modi nam numquam officia placeat quidem quos recusandae reiciendis ullam, voluptatem voluptatibus. Adipisci aliquam aliquid cumque, debitis delectus deleniti dolor dolores fugiat harum illo iste laudantium modi, repudiandae! Laudantium neque nihil tenetur! Aperiam itaque minima perspiciatis provident voluptatem!'
      }]
    }, {
      id: `list-${uuidv4()}`,
      title: 'Done',
      cards: [{
        id: `card-${uuidv4()}`,
        title: 'Create Edit button',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autemiam voluptate voluptatum!'
      }, {
        id: `card-${uuidv4()}`,
        title: 'Create Delete button',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur ducimus explicabo harum ipsa, iusto odit quia quis reiciendis repudiandae? Adipisci aperiam aspernatur atque, beatae culpa cupiditate eos et fugiat fugit, laudantium libero necessitatibus odit perspiciatis quam quis repellendus sunt! Aut eos laudantium, maxime nulla quos tenetur? Adipisci asperiores at aut beatae consectetur doloribus earum eum exercitationem facere id incidunt ipsum, iusto laboriosam maxime necessitatibus neque nisi perspiciatis placeat quas sint sunt tempore ullam voluptatem. Accusantium autem itaque modi nemo perspiciatis rerum? At, aut consequuntur dolorem ea esse est exercitationem expedita harum, ipsa laboriosam laborum nihil nulla odit ut vitae.'
      }, {
        id: `card-${uuidv4()}`,
        title: 'Create Add button',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
      }]
    }
  ]
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_CARD: {
      const newCard = {
        id: `card-${uuidv4()}`,
        title: action.payload.title,
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
          }

          return list;
        })
      };
    }
    case ACTION_TYPES.DRAG_CARD: {
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
    case ACTION_TYPES.DELETE_CARD: {
      const newState = { ...state };
      const { lists } = newState;
      const listIndex = lists.findIndex(list => list.id === action.payload.listID);
      const cardIndex = lists[listIndex].cards.findIndex(card => card.id === action.payload.cardID);
      lists[listIndex].cards.splice(cardIndex, 1);
      return newState;
    }
    case ACTION_TYPES.UPDATE_CARD: {
      const newState = { ...state };
      const { lists } = newState;
      const listIndex = lists.findIndex(list => list.id === action.payload.listID);
      const cardIndex = lists[listIndex].cards.findIndex(card => card.id === action.payload.cardID);

      lists[listIndex].cards[cardIndex] = {
        id: action.payload.cardID,
        title: action.payload.title,
        text: action.payload.text,
      };

      return newState;
    }
    default:
      return state;
  }
};

export default listReducer;
