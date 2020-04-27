export const validateTitle = (payload) => {
    const { value } = payload;

    if (value === '') {
        return {
            error: true,
            errorMessage: 'Title is required',
        };
    } else if (value.length < 4 || value.length > 40) {
        return {
            error: true,
            errorMessage: 'Title length must be between 4 and 40 characters',
        };
    } 

    return {
        error: false,
        errorMessage: '',
    };
}

export const validateDescription = (payload) => {
    const { value } = payload;
    
    if (value === '') {
        return {
            error: true,
            errorMessage: 'Description is required',
        };
    } else if (value.length < 10 || value.length > 400) {
        return {
            error: true,
            errorMessage: 'Description length must be between 10 and 400 characters',
        };
    } 

    return {
        error: false,
        errorMessage: '',
    };
}