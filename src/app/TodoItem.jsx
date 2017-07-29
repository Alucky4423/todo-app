import React from 'react'

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
    // const style = {
    //   checked: (this.state.checked) ? {
    //     textDecoration: "line-through",
    //   } : {},
    //   delBtn: {
    //     color: 'white',
    //     backgroundColor: 'red',
    //   }
    // };

    const todo = this.props.todo

    return (
      <li id={todo.id}>
        <label>
          <input type="checkbox"
            checked={this.state.checked}
            onChange={this.handleChange.bind(this)} />
            {todo.content}
        </label>
        <button type="button" onClick={() => this.props.onClick(todo.id)}>Del</button>
      </li>
    )
  }
}
