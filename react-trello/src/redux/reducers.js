import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { actionTypes } from "./types";
import { dragCard } from './utils';
import { deleteTask } from "./utils";
import { addTask } from "./utils";

const persistConfig = {
    key: 'root',
    storage,
    whiteList: [taskReducer]
}
 
const initialState = {
    'TODO' : [
        {
            id : 4,
            title: "Redux",
            description: "Use redux"
        } 
    ],
        
    'IN PROGRESS' : [
        {
            id : 2,
            title: "Initial layout",
            description: "Do initial layout"
        },
        {
            id : 3,
            title: "Drag and drop",
            description: "Do drag and drop functionality"
        }
    ],
        
    'DONE' : [
        {
            id : 1,
            title: "Project plan",
            description: "Do plan of a project"
        }
    ],
}

function taskReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.DRAG_CARD:
            return dragCard(state, action.payload);
        case actionTypes.DELETE_TASK:
            return {
                ...state,
                [action.payload.listName] : deleteTask(state, action.payload)
            }
        case actionTypes.ADD_TASK:
            return {
                ...state,
                [action.payload.listName] : addTask(state, action.payload)
            }
        default: 
            return state
    }
}

export default persistReducer(persistConfig, taskReducer);