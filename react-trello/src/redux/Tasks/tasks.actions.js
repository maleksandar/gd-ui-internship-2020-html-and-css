import { actionTypes } from "./tasks.types";

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
            listName: listName,
            id: id
        },
    }
)

export const addTask = (listName, title, description) => (
    {
        type: actionTypes.ADD_TASK,
        payload: {
            listName: listName,
            title: title,
            description: description
        }
    }
)

export const editTask = (listName, id, title, description) => (
    {
        type: actionTypes.EDIT_TASK,
        payload: {
            listName: listName,
            id: id,
            title: title,
            description: description
        }
    }
)