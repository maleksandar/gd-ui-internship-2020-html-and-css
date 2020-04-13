import { moveTask } from './taskList.utils';
import ActionType from './taskList.types';

const INITIAL_STATE = {
  lists: {
    'list-1':{
      id:'list-1',
      title: 'Todo',
      taskIDs: ['task-1', 'task-2', 'task-7']
    },
    'list-2':{
      id:'list-2',
      title: 'in Progress',
      taskIDs: ['task-3', 'task-4']
    },
    'list-3':{
      id: 'list-3',
      title: 'Done',
      taskIDs: ['task-5', 'task-6']
    }
  }
}
const taskListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ActionType.MOVE_TASK:
    return {
      ...state,
      lists: moveTask(state, action.payload)
    }
  case ActionType.ADD_TASK:
    return {

    }
  case ActionType.REMOVE_TASK:
    return {
                
    }
  default:
    return state;
  }
}
export default taskListReducer;