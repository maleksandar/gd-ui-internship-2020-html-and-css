import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import dragCard from './utils';

const persistConfig = {
    key: 'root',
    storage,
    whiteList: [taskReducer]
}
 
const initialState = {
    lists: {
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
}

function taskReducer(state = initialState, action) {
    switch(action.type) {
        case "DRAG_TASK":
            return {
                ...state,
                lists: dragCard(state, action.payload)
            };
        default: 
            return state
    }
}

export default persistReducer(persistConfig, taskReducer);