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

    const updatedTodoList = this.state.todoList.concat([ new Todo(todo) ])
    this.updateState(updatedTodoList)
  }

  toggleTodo(id) {
    const updatedTodoList = this.state.todoList
      .concat()
      .map(todo => {
        if (todo.id === id) return Todo.toggle(todo)
        else return todo
      })

    this.updateState(updatedTodoList)
  }

  removeTodo(id) {
    const updatedTodoList = this.state.todoList
      .concat()
      .filter(todo => { return todo.id !== id })

    this.updateState(updatedTodoList)
  }

  updateState(todoList) {
    // 永続化
    localStorage.setItem(TodoApp.SERIALIZE_KEY, JSON.stringify(todoList))
    // 状態更新
    this.setState({ todoList: todoList })
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