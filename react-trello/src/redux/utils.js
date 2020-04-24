const dragCard = (state, result) => {        
    const { destination, source, draggableId } = result;

    if (!destination) {
        return {...state.lists};
    }

    if (destination.droppableId === source.droppableId && 
        destination.index === source.index) {
        return {...state.lists};
    }

    if (destination.droppableId === source.droppableId) {
        const tasks = state.lists[source.droppableId];

        [tasks[source.index], tasks[destination.index]] = 
            [tasks[destination.index], tasks[source.index]];

        return {
            ...state.lists,
            [draggableId]: tasks
        }
    } else {
        const sourceList = state.lists[source.droppableId];
        const destinationList = state.lists[destination.droppableId];

        destinationList.splice(destination.index, 0, sourceList[source.index]);
        sourceList.splice(source.index, 1);

        return {
            ...state.lists,
            [source.draggableId]: sourceList,
            [destination.draggableId]: destinationList
        };
    }
}

export default dragCard;