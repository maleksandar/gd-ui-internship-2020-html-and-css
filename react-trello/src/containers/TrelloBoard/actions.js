import { actionTypes } from './constants';

export const removeTask = (taskId, listId) => ({
  type: actionTypes.REMOVE_TASK,
  payload: {
    taskId,
    listId
  }
});

export const addTask = (task, listId) => ({
  type: actionTypes.ADD_TASK,
  payload: {
    task,
    listId
  }
});

export const moveTask = (moveResult) => ({
  type: actionTypes.MOVE_TASK,
  payload: {
    moveResult
  },
});

export const updateTask = (task) => ({
  type: actionTypes.UPDATE_TASK,
  payload: {
    task
  }
})