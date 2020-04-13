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