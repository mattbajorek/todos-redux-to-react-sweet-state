import { createStore } from 'react-sweet-state'
import actions from './todos.actions'

const initialState = []

const todosStore = createStore({ initialState, actions })

export default todosStore