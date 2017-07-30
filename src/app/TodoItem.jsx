import React from 'react'
import styles from './TodoItem.css.js'

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { checked: this.props.todo.isCompleted }
  }

  handleChange(event) {
    this.setState({ checked: event.target.checked })
    this.props.onChange(this.props.todo.id)
  }

  render() {
    const todo = this.props.todo
    return (
      <tr style={styles.base}>
        <td>
          <input type="checkbox"
            checked={this.state.checked}
            onChange={this.handleChange.bind(this)} />
        </td>
        <td style={this.state.checked ? styles.content.complete : {}}>{todo.content}</td>
        <td>
          <button type="button"
            style={styles.deleteBtn}
            onClick={() => this.props.onClick(todo.id)}>Del</button>
        </td>
      </tr>
    )
  }
}
