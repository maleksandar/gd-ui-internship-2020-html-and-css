import ActionType from './taskModal.types';

const INITIAL_STATE = {
  open: false,
  taskId: null,
  title: 'Task Title',
  description: 'Description for task',
  listId: null
}

const taskModalReducer = (state = INITIAL_STATE, {type, taskId, title, desc, listId, field, text}) => {
  switch (type) {
  case ActionType.TOGGLE_MODAL:
    return {
      ...state,
      open: !state.open,
      taskId: taskId? taskId : null,
      title: title? title : 'Task Title',
      description: desc? desc: null,
      listId: listId
    }
  case ActionType.CHANGE_TEXT:
    return {
      ...state,
      [field]: text
    }
  default: 
    return state;
  }
}
export default taskModalReducer;