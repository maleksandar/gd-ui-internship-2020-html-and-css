import ActionType from './taskModal.types';

const INITIAL_STATE = {
  open: false,
  taskID: null,
  tekst: 'sdfasfasfsd'
}

const taskModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ActionType.TOGGLE_MODAL:
    return {
      ...state,
      open: !state.open
    }
  default:
    return state;
  }
}
export default taskModalReducer;