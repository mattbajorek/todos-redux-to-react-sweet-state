import React from 'react'
import todosSelectors from '../stores/todos/todos.selectors'

const AddTodo = () => {
  let input

  const [, { addTodo }] = todosSelectors.useTodosActions()

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        addTodo(input.value)
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodo
