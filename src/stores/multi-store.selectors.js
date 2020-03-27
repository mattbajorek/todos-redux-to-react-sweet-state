import todosSelectors from './todos/todos.selectors'
import visibilityFilterSelectors from './visibilityFilter/visibilityFilter.selectors'

const multiStoreSelectors = {
  useVisibleTodos: () => {
    const [visibilityFilter, visibilityFilterActions] = visibilityFilterSelectors.useVisibilityFilter()
    const [visibleTodos, todosActions] = todosSelectors.useVisibleTodos(visibilityFilter)
    return [visibleTodos, { ...visibilityFilterActions, ...todosActions }]
  }
}

export default multiStoreSelectors