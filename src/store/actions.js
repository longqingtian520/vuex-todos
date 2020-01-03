import {
  ADD_TODO,
  DELETE_TODO,
  SELECT_ALL,
  DELETE_COMPLETE,
  RECEIVE_TODOS
} from './mutation-types'

export default {

  addTodo ({commit}, todo) {
    commit(ADD_TODO, {todo})
  }
}
