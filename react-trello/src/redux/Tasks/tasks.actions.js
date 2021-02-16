import { actionTypes } from './tasks.types';

export const dragCard = (result) => (
    { 
        type: actionTypes.DRAG_CARD,
        payload: result, 
    }
);

export const deleteTask = (listName, id) => (
    {
        type: actionTypes.DELETE_TASK,
        payload: {
            listName,
            id,
        },
    }
);

export const addTask = (listName, task) => (
    {
        type: actionTypes.ADD_TASK,
        payload: {
            listName,
            task,
        }
    }
);

export const editTask = (listName, id, title, description) => (
    {
        type: actionTypes.EDIT_TASK,
        payload: {
            listName,
            id,
            title,
            description,
        }
    }
);