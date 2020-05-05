import { actionTypes } from './tasks.types';
import { dragCard } from './tasks.utils';
import { editTask } from './tasks.utils';
 
const initialState = {
    'TODO': [],   
    'IN PROGRESS': [],    
    'DONE': [],
};

function taskReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.DRAG_CARD:
            return dragCard(state, action.payload);
        case actionTypes.DELETE_TASK:
            return {
                ...state,
                [action.payload.listName]: state[action.payload.listName].filter(item => (
                    item.id !== action.payload.id
                ))
            };
        case actionTypes.ADD_TASK:
            return {
                ...state,
                [action.payload.listName]: [
                    ...state[action.payload.listName],
                    action.payload.task
                ],
            };
        case actionTypes.EDIT_TASK:
            return {
                ...state,
                [action.payload.listName] : editTask(state, action.payload),
            };
        default: 
            return state;
    }
}

export default taskReducer;