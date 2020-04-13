import ActionType from './taskList.types';

export const moveTask = (moveResult) => ({
  type: ActionType.MOVE_TASK,
  payload: moveResult,
});
