import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Todo from './Todo.js';

class TodoApp extends React.Component {

  static get SERIALIZE_KEY() {
    return 'todoList'
  }

  constructor() {
    super()

    const jsonTodoList = localStorage.getItem(TodoApp.SERIALIZE_KEY)
    this.state = { todoList: (jsonTodoList) ? JSON.parse(jsonTodoList) : [] }
  }

  addTodo(todo) {
    console.log("TodoApp#addTodo : " + todo)
    if (!todo) return

    this.setState({
      todoList: this.state.todoList.concat([ new Todo(todo) ]),
    })

    localStorage.setItem(TodoApp.SERIALIZE_KEY, JSON.stringify(this.state.todoList))
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
        <TodoList todoList={this.state.todoList}
          onChange={this.toggleTodo.bind(this)}
          onClick={this.removeTodo.bind(this)} />
      </div>
    );
  }
}

export default TodoApp;