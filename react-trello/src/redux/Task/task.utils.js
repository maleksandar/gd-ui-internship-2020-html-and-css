function moveTaskInSameList(state, moveResult) {
  const { source, destination, draggableId } = moveResult;
  const taskIDs = [...state.lists[source.droppableId].taskIDs];
  taskIDs.splice(source.index, 1);
  taskIDs.splice(destination.index, 0, draggableId);
  const newList = {
    ...state.lists[source.droppableId],
    taskIDs: taskIDs
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

  const sourceTaskIDs = [...sourceList.taskIDs];
  const destinationTaskIDs  = [...destinationList.taskIDs];
  sourceTaskIDs.splice(source.index, 1);
  destinationTaskIDs.splice(destination.index, 0, draggableId);
  const newSourceList = {
    ...sourceList,
    taskIDs: sourceTaskIDs
  }
  const newDestinationList = {
    ...destinationList,
    taskIDs: destinationTaskIDs
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
  const newTaskIds = [...state.lists[listId].taskIDs];
  const removeIndex = newTaskIds.indexOf(taskId);
  newTaskIds.splice(removeIndex, 1);
  const newList = {
    ...state.lists[listId],
    taskIDs: newTaskIds
  }
  return {
    ...state.lists,
    [listId]: newList
  }
}

export const addTask = (state, payload, taskId) => {
  const {title, description} = payload.modal;
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
  const newTaskIds = [...state.lists[listId].taskIDs];
  if(newTaskIds.indexOf(taskId)){
    newTaskIds.push(taskId);
  }
  const newList = {
    ...state.lists[listId],
    taskIDs: newTaskIds
  }
  return {
    ...state.lists,
    [listId]: newList
  }
}