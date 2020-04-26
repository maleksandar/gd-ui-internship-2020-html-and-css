export const validateTitle = (payload) => {
    if (payload.value === '') {
        return {
            error: true,
            errorMessage: 'Title is required'
        } 
    } else if (payload.value.length < 4 || payload.value.length > 40) {
        return {
            error: true,
            errorMessage: 'Title length must be between 4 and 40 characters'
        }
    } 

    return {
        error: false,
        errorMessage: ''
    };
}

export const validateDescription = (payload) => {
    if (payload.value === '') {
        return {
            error: true,
            errorMessage: 'Description is required'
        } 
    } else if (payload.value.length < 10 || payload.value.length > 400) {
        return {
            error: true,
            errorMessage: 'Description length must be between 10 and 400 characters'
        }
    } 

    return {
        error: false,
        errorMessage: ''
    };
}