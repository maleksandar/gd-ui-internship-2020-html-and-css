import * as actionTypes from './types';

export const addTask = (listID, text, description) => {
    return {
        type: actionTypes.ADD_TASK,
        payload: { listID, text, description }
    }
}

export const deleteTask = (cardID, listID) => {
    return {
        type: actionTypes.DELETE_TASK,
        payload: { cardID, listID }
    }
}

export const editTask = (listID, id, text, description) => {
    return {
        type: actionTypes.EDIT_TASK,
        payload: { listID, id, text, description }
    }
}

export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId
) => {
    return {
        type: actionTypes.DRAG_HAPPENED,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId
        }
    }
}