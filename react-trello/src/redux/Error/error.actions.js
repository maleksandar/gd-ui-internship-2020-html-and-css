import { errorTypes } from './error.types';

export const validateTitle = (value) => (
    { 
        type: errorTypes.TITLE_ERROR,
        payload: {
            value : value,
        }
    }
);

export const validateDescription = (value) => (
    { 
        type: errorTypes.DESCRIPTION_ERROR,
        payload: {
            value : value,
        }
    }
);