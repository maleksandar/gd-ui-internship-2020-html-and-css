import * as actionTypes from "./types";

export const addTask = (task) => ({
    type: actionTypes.ADD_TASK,
    payload: { task },
});

export const editTask = (listType, task) => ({
    type: actionTypes.EDIT_TASK,
    payload: { listType, task },
});

export const deleteTask = (listType, taskId) => ({
    type: actionTypes.DELETE_TASK,
    payload: { listType, taskId },
});

export const dragCardInOtherList = (fromListType, toListType, task, list) => ({
    type: actionTypes.DRAG_HAPPENED_IN_OTHER_LIST,
    payload: { fromListType, toListType, task, list },
});

export const dragCardInSameList = (listType, list) => ({
    type: actionTypes.DRAG_HAPPENED_IN_SAME_LIST,
    payload: { listType, list },
});
