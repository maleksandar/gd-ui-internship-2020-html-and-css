import ActionType from './taskModal.types';

export const toggleModal = (task, listId) => ({
  type: ActionType.TOGGLE_MODAL,
  payload: {
    ...task,
    listId
  }
});

export const changeText = (field, text) => ({
  type: ActionType.CHANGE_TEXT,
  payload: {
    field,
    text
  }
})
