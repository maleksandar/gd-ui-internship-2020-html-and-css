import ActionType from './taskModal.types';

const INITIAL_STATE = {
  open: false,
  taskId: null,
  listId: null
}

const taskModalReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
  case ActionType.TOGGLE_MODAL:
    const { listId } = payload
    return {
      ...state,
      open: !state.open,
      taskId: payload.taskId,
      listId: listId
    }

  default: 
    return state;
  }
}
export default taskModalReducer;
