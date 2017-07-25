import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class Todo {
  constructor(content, isCompleted = false) {
    this.content = content
    this.isCompleted = isCompleted
  }

  toggle() {
    return new Todo(this.content, !this.isCompleted)
  }
}

class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = { todos: [] };
  }

  addTodo(todo) {
    console.log(todo);
    if (!todo) return;

    this.setState({
      todos: this.state.todos.concat([
        new Todo(todo)
      ]),
    });
  }

  toggleTodo(idx) {
    const toggledTodos = this.state.todos
      .concat()
      .reduce((arr, todo, currentIndex) => {
        const addingTodo = (currentIndex === idx)
            ? todo.toggle() : todo;
        return arr.concat([ addingTodo ]);
      }, []);

    toggledTodos.forEach(todo => console.log(todo));
    this.setState({ todos: toggledTodos })
  }

  removeTodo(idx) {
    let copied = this.state.todos.concat();
    copied.splice(idx, 1);
    this.setState({ todos: copied });
  }

  render() {
    return (
      <div id="Todo">
        <h1>TodoApp</h1>
        <TodoForm onSubmit={this.addTodo.bind(this)} />
        <TodoList todos={this.state.todos}
          onChange={this.toggleTodo.bind(this)}
          onClick={this.removeTodo.bind(this)} />
      </div>
    );
  }
}

export default TodoApp;