const INITIAL_STATE = {
  tasks: {
    'task-1': {
      id: 'task-1',
      title: 'card title 1',
      desc: 'card description some text bla bla bla'
    },
    'task-2': {
      id: 'task-2',
      title: 'card title 2',
      desc: 'card description some text bla bla bla'
    },
    'task-3': {
      id: 'task-3',
      title: 'card title 3',
      desc: 'card description some text bla bla bla'
    },
    'task-4': {
      id: 'task-4',
      title: 'card title 4',
      desc: 'card description some text bla bla sfasfsadfs bla'
    },
    'task-5': {
      id: 'task-5',
      title: 'card title 5',
      desc: 'card description some text bla bla bla'
    },
    'task-6': {
      id: 'task-6',
      title: 'card title',
      desc: 'card description some text bla bla bla'
    },
    'task-7':{
      id: 'task-7',
      title: 'card title',
      desc: 'card description some text bla bla bla'
    }
  }
}
const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      
  default:
    return state;
  }
}
export default taskReducer;