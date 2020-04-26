import * as actionTypes from './types'
import { uuid } from 'uuidv4';

const initialState = [
    {
        title: 'Todo',
        id: 0,
        cards: [
            {
                id: 0,
                text: 'Text1',
                description: 'Desc1'
            },
            {
                id: 1,
                text: 'Text2',
                description: 'Desc2'
            }
        ]
    },
    {
        title: 'In Progress',
        id: 1,
        cards: [
            {
                id: 2,
                text: 'Text1',
                description: 'Desc1'
            },
            {
                id: 3,
                text: 'Text2',
                description: 'Desc2'
            },
            {
                id: 4,
                text: 'Text3',
                description: 'Desc3'
            }
        ]
    },
    {
        title: 'Done',
        id: 2,
        cards: [
            {
                id: 5,
                text: 'Text1',
                description: 'Desc1'
            },
            {
                id: 6,
                text: 'Text2',
                description: 'Desc3'
            }
        ]
    }
]

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TASK: {
            const { listID, text, description } = action.payload;
            const newCard = {
                id: uuid(),
                text: text,
                description: description
            }

            const newState = state.map(list => {
                if (list.id === listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                }
                else {
                    return list;
                }
            })
            return newState;
        }

        case actionTypes.DRAG_HAPPENED: {

            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
            } = action.payload;
            const newState = [...state];

            //drag in the same list
            if (droppableIdStart === droppableIdEnd) {
                const list = newState.find(list => Number(droppableIdStart) === list.id);
                const card = list.cards.splice(droppableIndexStart, 1);
                list.cards.splice(droppableIndexEnd, 0, ...card)
            }

            //drag between lists
            if (droppableIdStart !== droppableIdEnd) {
                const listStart = state.find(list => Number(droppableIdStart) === list.id);
                const card = listStart.cards.splice(droppableIndexStart, 1);
                const listEnd = state.find(list => Number(droppableIdEnd) === list.id);
                listEnd.cards.splice(droppableIndexEnd, 0, ...card);
            }

            return newState;
        }

        case actionTypes.EDIT_TASK: {
            const newState = [...state];
            const { listID, id, text, description } = action.payload
            const listIndex = newState.findIndex(list => list.id === listID);
            const cardIndex = newState[listIndex].cards.findIndex(card => card.id === id);
            newState[listIndex].cards[cardIndex] = { id: id, text: text, description: description };

            return newState;
        }

        case actionTypes.DELETE_TASK: {
            const newState = [...state];
            const { cardID, listID } = action.payload;
            const listIndex = newState.findIndex(list => list.id === listID);
            const cardIndex = newState[listIndex].cards.findIndex(card => card.id === cardID);
            newState[listIndex].cards.splice(cardIndex, 1);

            return newState
        }

        default:
            return state;
    }
}

export default reducer;