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
            [source.droppableId]: tasks,
        }
    } else {
        const sourceTasks = [...state[source.droppableId]];
        const destinationTasks= [...state[destination.droppableId]];

        destinationTasks.splice(destination.index, 0, sourceTasks[source.index]);
        sourceTasks.splice(source.index, 1);

        return {
            ...state,
            [source.droppableId]: sourceTasks,
            [destination.droppableId]: destinationTasks,
        };
    }
};

export const deleteTask = (state, payload) => {
    const {listName, id} = payload;

    const tasks = [...state[listName]];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);

    return tasks;
};

export const addTask = (state, payload) => {
    const {listName, title, description} = payload;

    const tasks = [...state[listName]];

    const task = {
        id: uuidv1(),
        title: title,
        description: description,
    };

    tasks.push(task);

    return tasks;
};

export const editTask = (state, payload) => {
    const {listName, id, title, description} = payload;
    const tasks = [...state[listName]];

    const index = tasks.findIndex(task => task.id === id);

    const task = {
        id: id,
        title: title,
        description: description,
    };

    tasks[index] = task;

    return tasks;
};
