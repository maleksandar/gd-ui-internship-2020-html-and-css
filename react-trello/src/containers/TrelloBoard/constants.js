export const actionTypes = {
  ADD_TASK: 'ADD_TASK',
  REMOVE_TASK: 'REMOVE_TASK',
  UPDATE_TASK: 'UPDATE_TASK',
  MOVE_TASK: 'MOVE_TASK'
};

export const INITIAL_STATE = {
  tasks: {
    'task-1': {
      id: 'task-1',
      title: 'card title 1',
      desc: 'Descripton for the first task'
    },
    'task-2': {
      id: 'task-2',
      title: 'card title 2',
      desc: 'Descripton for the second task'
    },
    'task-3': {
      id: 'task-3',
      title: 'card title 3',
      desc: 'Descripton for the third task'
    },
    'task-4': {
      id: 'task-4',
      title: 'card title 4',
      desc: 'Descripton for the forth task'
    },
    'task-5': {
      id: 'task-5',
      title: 'card title 5',
      desc: 'Descripton for the fifth task'
    },
    'task-6': {
      id: 'task-6',
      title: 'card title 6',
      desc: 'Descripton for the sixth task'
    },
    'task-7':{
      id: 'task-7',
      title: 'card title 7',
      desc: 'Descripton for the seventh task'
    }
  },
  lists: {
    'list-1':{
      id:'list-1',
      title: 'Todo',
      taskIds: ['task-1', 'task-2', 'task-7']
    },
    'list-2':{
      id:'list-2',
      title: 'In Progress',
      taskIds: ['task-3', 'task-4']
    },
    'list-3':{
      id: 'list-3',
      title: 'Done',
      taskIds: ['task-5', 'task-6']
    }
  }
}
