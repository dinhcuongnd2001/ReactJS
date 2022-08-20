import {SET_TODO_INPUT, ADD_TODO_INPUT, DELETE_TODO_INPUT} from './constants'
const initalState = {
    todos: [],
    todoInput: '',
}

function reducer(state, action){
    switch (action.type){
        case SET_TODO_INPUT :
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO_INPUT:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO_INPUT:
            const newTodos = [...state.todos];
            newTodos.splice(action.payload,1);
            return {
                ...state,
                todos: newTodos
            }
    
        default:
            throw new Error('invalid action...');
    }
}

export {initalState};
export default reducer;
