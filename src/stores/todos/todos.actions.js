let nextTodoId = 0

const todosActions = {
  addTodo: text => ({ setState }) => {
      setState(todos => {
        todos.push({
          id: nextTodoId++,
          text,
          completed: false
        })
      })
    },
  toggleTodo: todoId => ({ setState }) => {
      setState(todos => {
        const todo = todos.find(({ id }) => id === todoId)
        if (todo) {
          todo.completed = !todo.completed
        }
      })
    }
}

export default todosActions