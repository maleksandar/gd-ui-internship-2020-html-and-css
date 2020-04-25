import { v1 as uuidv1 } from 'uuid';

export const dragCard = (state, result) => {        
    const { destination, source } = result;

    if (!destination) {
        return {...state};
    }

    if (destination.droppableId === source.droppableId && 
        destination.index === source.index) {
        return {...state};
    }

    if (destination.droppableId === source.droppableId) {
        const tasks = [...state[source.droppableId]];

        [tasks[source.index], tasks[destination.index]] = 
            [tasks[destination.index], tasks[source.index]];
        
        return {
            ...state,
            [source.droppableId]: tasks
        }
    } else {
        const sourceList = [...state[source.droppableId]];
        const destinationList = [...state[destination.droppableId]];

        destinationList.splice(destination.index, 0, sourceList[source.index]);
        sourceList.splice(source.index, 1);

        return {
            ...state,
            [source.droppableId]: sourceList,
            [destination.droppableId]: destinationList
        };
    }
}

export const deleteTask = (state, payload) => {
    const {listName, id} = payload;
    const tasks = [...state[listName]];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);

    return tasks;
}

export const addTask = (state, payload) => {
    const {listName, title, description} = payload;
    const tasks = [...state[listName]]

    const task = {
        id: uuidv1(),
        title: title,
        description: description
    }

    tasks.push(task);

    return tasks;
}
