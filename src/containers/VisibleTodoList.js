import React from 'react'
import TodoList from '../components/TodoList'
import multiStoreSelectors from '../stores/multi-store.selectors'

const VisibleTodoList = ({ children }) => {
  const [visibleTodos, { toggleTodo }] = multiStoreSelectors.useVisibleTodos()

  return (
    <TodoList
      todos={visibleTodos}
      toggleTodo={toggleTodo}>
      {children}
    </TodoList>
  )
}

export default VisibleTodoList