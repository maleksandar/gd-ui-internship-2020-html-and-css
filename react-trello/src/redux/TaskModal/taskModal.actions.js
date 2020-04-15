import ActionType from './taskModal.types';

export const toggleModal = (taskId , title, desc, listId) => ({
  type: ActionType.TOGGLE_MODAL,
  taskId,
  title,
  desc,
  listId
});

export const changeText = (field, text) => ({
  type: ActionType.CHANGE_TEXT,
  
    field,
    text
})