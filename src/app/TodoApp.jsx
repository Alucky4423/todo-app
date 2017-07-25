import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Todo from './Todo.js';

class TodoApp extends React.Component {
  constructor() {
    super()
    this.state = { todoList: [] }
  }

  addTodo(todo) {
    console.log(todo)
    if (!todo) return

    this.setState({
      todoList: this.state.todoList.concat([ new Todo(todo) ]),
    })
  }

  toggleTodo(id) {
    // const toggledTodos = this.state.todos
    //   .concat()
    //   .reduce((arr, todo, currentIndex) => {
    //     const addingTodo = (currentIndex === idx)
    //         ? todo.toggle() : todo;
    //     return arr.concat([ addingTodo ]);
    //   }, []);

    // toggledTodos.forEach(todo => console.log(todo));
    // this.setState({ todos: toggledTodos })
  }

  removeTodo(id) {
    // let copied = this.state.todos.concat();
    // copied.splice(idx, 1);
    // this.setState({ todos: copied });
  }

  render() {
    return (
      <div id="Todo">
        <h1>TodoApp</h1>
        <TodoForm onClick={this.addTodo.bind(this)} />
        <TodoList todoList={this.state.todos}
          onChange={this.toggleTodo.bind(this)}
          onClick={this.removeTodo.bind(this)} />
      </div>
    );
  }
}

export default TodoApp;