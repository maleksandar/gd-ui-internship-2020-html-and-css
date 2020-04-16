import ActionType from './taskModal.types';

const INITIAL_STATE = {
  open: false,
  taskId: null,
  title: 'Task Title',
  description: 'Description for task',
  listId: null
}

const taskModalReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
  case ActionType.TOGGLE_MODAL:
    const {id, title, desc, listId} = payload
    return {
      ...state,
      open: !state.open,
      title: title? title : 'Task Title',
      description: desc? desc: null,
      taskId: id? id : null,
      listId: listId
    }

  case ActionType.CHANGE_TEXT:
    const {field, text} = payload;
    return {
      ...state,
      [field]: text
    }

  default: 
    return state;
  }
}
export default taskModalReducer;
