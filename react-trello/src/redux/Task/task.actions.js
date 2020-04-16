import ActionType from './task.types';

export const removeTask = (taskId, listId) => ({
  type: ActionType.REMOVE_TASK,
  payload: {
    taskId,
    listId
  }
});

export const addTask = (modal) => ({
  type: ActionType.ADD_TASK,
  payload: {
    modal
  }
});

export const moveTask = (moveResult) => ({
  type: ActionType.MOVE_TASK,
  payload: moveResult,
});

export const updateTask = (modal) => ({
  type: ActionType.UPDATE_TASK,
  payload: {
    modal
  }
  
})