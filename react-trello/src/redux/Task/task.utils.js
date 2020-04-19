function moveTaskInSameList(state, moveResult) {
  const { source, destination, draggableId } = moveResult;
  const taskIds = [...state.lists[source.droppableId].taskIds];
  taskIds.splice(source.index, 1);
  taskIds.splice(destination.index, 0, draggableId);
  const newList = {
    ...state.lists[source.droppableId],
    taskIds: taskIds
  }
  return {
    ...state.lists,
    [source.droppableId]: newList
  }
}

function moveTaskInDifferentList(state, moveResult) {
  const { destination, source, draggableId } = moveResult;
  const sourceList = state.lists[source.droppableId];
  const destinationList = state.lists[destination.droppableId];

  const sourceTaskIds = [...sourceList.taskIds];
  const destinationTaskIds  = [...destinationList.taskIds];
  sourceTaskIds.splice(source.index, 1);
  destinationTaskIds.splice(destination.index, 0, draggableId);

  const newSourceList = {
    ...sourceList,
    taskIds: sourceTaskIds
  }
  const newDestinationList = {
    ...destinationList,
    taskIds: destinationTaskIds
  }

  return {
    ...state.lists,
    [sourceList.id]: newSourceList,
    [destinationList.id]: newDestinationList
  };
}

export const generateId = (tasks) => {
  const keys = Object.keys(tasks);
  const lastId = tasks[keys[keys.length - 1]].id;
  let number = lastId.split('-')[1];
  number = +number + 1;
  return `task-${number}`;
}

export const moveTask = (state ,moveResult) => {
  const { destination, source } = moveResult;
  if(!destination) {
    return state.lists;
  }
  if(source.droppableId === destination.droppableId && 
        destination.index === source.index){
    return state.lists;
  }
  else if(source.droppableId === destination.droppableId) {
    return moveTaskInSameList(state, moveResult)
  }
  else {
    return moveTaskInDifferentList(state, moveResult)
  }
    
}

export const removeTask = (state, taskId) =>{
  const newTasks = {...state.tasks}
  delete newTasks[taskId];
  return newTasks;
}

export const removeTaskFromList = (state, { listId, taskId }) =>{
  const taskIds = state.lists[listId].taskIds;
  const newTaskIds = taskIds.filter((id) => {
    return id !== taskId
  })

  const newList = {
    ...state.lists[listId],
    taskIds: newTaskIds
  }

  return {
    ...state.lists,
    [listId]: newList
  }
}

export const addTask = (state, task, taskId) => {
  const {title, description} = task;
  const newTask = {
    id: taskId,
    title: title,
    desc: description
  }

  return {
    ...state.tasks,
    [taskId] : newTask
  }
}

export const addTaskToList = (state, listId, taskId) => {
  const newTaskIds = [...state.lists[listId].taskIds, taskId];
  const newList = {
    ...state.lists[listId],
    taskIds: newTaskIds
  }
  return {
    ...state.lists,
    [listId]: newList
  }
}

export const updateTask = (state, task) => {
  const {id, title, description} = task;
  const newTask = {
    id: id,
    title: title,
    desc: description
  }

  return {
    ...state.tasks,
    [id] : newTask
  }
}
