import { actionTypes } from './constants';
export const toggleModal = (taskId, listId) => ({
  type: actionTypes.TOGGLE_MODAL,
  payload: {
    taskId,
    listId
  }
});