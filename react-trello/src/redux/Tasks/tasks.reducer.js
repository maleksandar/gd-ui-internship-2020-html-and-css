import { actionTypes } from './tasks.types';
import { dragCard } from './tasks.utils';
import { deleteTask } from './tasks.utils';
import { addTask } from './tasks.utils';
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
                [action.payload.listName] : deleteTask(state, action.payload),
            };
        case actionTypes.ADD_TASK:
            return {
                ...state,
                [action.payload.listName] : addTask(state, action.payload),
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