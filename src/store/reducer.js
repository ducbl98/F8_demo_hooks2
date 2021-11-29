import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO, EDIT_TODO, CHANGE_TODO } from './constants'

const initialState = {
  todos: [],
  todoInput: '',
}

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.splice(action.payload, 1)
      }
    case EDIT_TODO:
      return {
        ...state,
        todoInput: action.payload
      }
    case CHANGE_TODO:
      return {
        ...state,
        todos:state.todos.splice(action.payload.indexToChange,1,action.payload.todoInput)
      }
    default:
      throw new Error('Invalid action type: ' + action.type)
  }
}


export { initialState }
export default reducer;