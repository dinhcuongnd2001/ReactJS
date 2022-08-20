import {SET_TODO_INPUT, ADD_TODO_INPUT, DELETE_TODO_INPUT} from './constants'

const setTodoInput = payload => ({
    payload,
    type: SET_TODO_INPUT
});

const addTodoInput = payload => ({
    payload,
    type: ADD_TODO_INPUT
})

const deleteTodoInput = payload => ({
    payload,
    type: DELETE_TODO_INPUT
})


export {setTodoInput, addTodoInput, deleteTodoInput};