import { errorTypes } from './error.types';
import { validateTitle } from './error.utils';
import { validateDescription } from './error.utils';

const initialState = {
     titleError: {
         error: false,
         errorMessage: '',
     },
     descriptionError: {
         error: false,
         errorMessage: '',
     },
};

function errorReducer(state = initialState, action) {
    switch(action.type) {
        case errorTypes.TITLE_ERROR:
            return {
                ...state,
                titleError: validateTitle(action.payload),
            };
        case errorTypes.DESCRIPTION_ERROR:
            return {
                ...state,
                descriptionError: validateDescription(action.payload),
            };
        default: 
            return state;
    }
}

export default errorReducer;