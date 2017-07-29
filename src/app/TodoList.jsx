import React from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends React.Component {
  render() {
    return (
      <ul id="todoList">
        {this.props.todoList.map(todo =>
          <TodoItem key={todo.id} todo={todo}
            onChange={this.props.onChange} onClick={this.props.onClick} />)}
      </ul>
    )
  }
}
