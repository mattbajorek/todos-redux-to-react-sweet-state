import makeSelectorsIntoHooks from '../utils'

import todosStore from './todos.store'
import { VisibilityFilters } from '../visibilityFilter/visibilityFilter.store'

const todoSelectors = {
  useTodosActions: null,
  useVisibleTodos: (todos, visibilityFilter) => {
    switch (visibilityFilter) {
      case VisibilityFilters.SHOW_ALL:
        return todos
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + visibilityFilter)
    }
  }
}

export default makeSelectorsIntoHooks(todoSelectors, todosStore)