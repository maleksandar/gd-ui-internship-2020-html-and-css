export const defaultLists = {
  'list-1': {
    id: 'list-1',
    title: 'todo',
    taskIds: ['task-1']
  },
  'list-2': {
    id: 'list-2',
    title: 'In Progress',
    taskIds: [] 
  },
  'list-3': {
    id: 'list-3',
    title: 'Done',
    taskIds: ['task-2','task-3']
  },
  [Symbol.iterator]: function* () {
    let properties = Object.keys(this);
    for (let i of properties) {
        yield [i, this[i]];
    }
}  
}

export const defaultTasks = {
  'task-1': {
    id: 'task-1',
    title: 'Go shopping',
    description: 'card description'
  },
  'task-2': {
    id: 'task-2',
    title: 'Take out the trash',
    description: 'card description'
  },
  'task-3': {
    id: 'task-3',
    title: 'Learn a new framework',
    description: 'card description'
  },
  [Symbol.iterator]: function* () {
    let properties = Object.keys(this);
    for (let i of properties) {
        yield [i, this[i]];
    }
  }
}

