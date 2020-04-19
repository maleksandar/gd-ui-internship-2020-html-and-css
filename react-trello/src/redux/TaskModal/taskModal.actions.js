import ActionType from './taskModal.types';

export const toggleModal = (taskId, listId) => ({
  type: ActionType.TOGGLE_MODAL,
  payload: {
    taskId,
    listId
  }
});
