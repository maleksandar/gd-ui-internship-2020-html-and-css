import * as actionTypes from "./types";
import { uuid } from "uuidv4";

const initialState = {
    todoList: [
        {
            id: uuid(),
            text: "Text1",
            description: "Desc1",
        },
        {
            id: uuid(),
            text: "Text2",
            description: "Desc2",
        },
    ],
    inProgresList: [
        {
            id: uuid(),
            text: "Text1",
            description: "Desc1",
        },
        {
            id: uuid(),
            text: "Text2",
            description: "Desc2",
        },
        {
            id: uuid(),
            text: "Text3",
            description: "Desc3",
        },
    ],
    doneList: [
        {
            id: uuid(),
            text: "Text1",
            description: "Desc1",
        },
        {
            id: uuid(),
            text: "Text2",
            description: "Desc3",
        },
    ],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TASK:
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {
                        id: uuid(),
                        ...action.payload.task,
                    },
                ],
            };
        case actionTypes.EDIT_TASK:
            return {
                ...state,
                [action.payload.listType]: state[action.payload.listType].map(
                    (item) => {
                        if (item.id === action.payload.task.id) {
                            return action.payload.task;
                        }

                        return item;
                    }
                ),
            };
        case actionTypes.DELETE_TASK: {
            return {
                ...state,
                [action.payload.listType]: state[action.payload.listType].filter(
                    (item) => item.id !== action.payload.taskId
                ),
            };
        }
        case actionTypes.DRAG_HAPPENED_IN_OTHER_LIST:
            return {
                ...state,
                [action.payload.fromListType]: state[
                    action.payload.fromListType
                ].filter((item) => item.id !== action.payload.task.id),
                [action.payload.toListType]: action.payload.list
            };
        case actionTypes.DRAG_HAPPENED_IN_SAME_LIST:
            return {
                ...state,
                [action.payload.listType]: action.payload.list,
            };

        default:
            return state;
    }
};

export default reducer;
