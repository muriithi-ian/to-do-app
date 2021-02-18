import React, { Component } from 'react'
import Todos from './Todos';
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy some milk" },
      { id: 2, content: "Read on hooks" }
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return id !== todo.id
    });
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">
          Todo's
        </h1>
        <AddTodo />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}
export default App;
