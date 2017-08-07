import React from 'react'
import styles from './TodoItem.css.js'

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { checked: this.props.todo.isCompleted }
  }

  handleChange(event) {
    console.log(event.target.checked)
    this.setState({ checked: event.target.checked })
    this.props.onChange(this.props.todo.id)
  }

  handleChangeOfContent(event) {
    const target = event.target.parentNode.querySelector('input[type=checkbox]')
    this.setState({ checked: !target.checked })
    this.props.onChange(this.props.todo.id)
  }

  render() {
    const todo = this.props.todo
    return (
      <tr style={styles.tr}>
        <td style={Object.assign({},
                    styles.td.checkbox,
                    styles.td.base)}>
          <input type="checkbox"
            checked={this.state.checked}
            onChange={this.handleChange.bind(this)} />
        </td>
        <td style={this.state.checked 
              ? Object.assign({}, styles.content.complete, styles.td.content, styles.td.base)
              : Object.assign({}, styles.td.content, styles.td.base)}
          onClick={this.handleChangeOfContent.bind(this)}>
          {todo.content}
        </td>
        <td style={Object.assign({},
                    styles.td.btn,
                    styles.td.base)}>
          <button type="button"
            style={styles.deleteBtn}
            onClick={() => this.props.onClick(todo.id)}>Del</button>
        </td>
      </tr>
    )
  }
}
