import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    const todos = this.props.todos
    return (
      <ul id="todoList">
        {todos.map((todo, idx) => 
          <TodoItem key={idx}
            dataIndex={idx}
            value={todo.content}
            checked={todo.isCompleted}
            onChange={this.props.onChange}
            onClick={this.props.onClick} />
        )}
      </ul>
    );
  }
}

export default TodoList;