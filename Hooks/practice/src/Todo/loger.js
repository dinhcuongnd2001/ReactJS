function logger(reducer){
    return (preState, action) => {
        console.group(action.type);
        console.log('Pre State: ', preState);
        const newState = reducer(preState, action);
        console.log('Next State: ', newState);
        console.groupEnd();
        return newState;
    };
}

export default logger;