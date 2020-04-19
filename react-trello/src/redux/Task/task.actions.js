import ActionType from './task.types';

export const removeTask = (taskId, listId) => ({
  type: ActionType.REMOVE_TASK,
  payload: {
    taskId,
    listId
  }
});

export const addTask = (task, listId) => ({
  type: ActionType.ADD_TASK,
  payload: {
    task,
    listId
  }
});

export const moveTask = (moveResult) => ({
  type: ActionType.MOVE_TASK,
  payload: moveResult,
});

export const updateTask = (task) => ({
  type: ActionType.UPDATE_TASK,
  payload: {
    task
  }
  
})