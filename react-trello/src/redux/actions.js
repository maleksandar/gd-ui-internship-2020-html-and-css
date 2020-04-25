import { actionTypes } from "./types";

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