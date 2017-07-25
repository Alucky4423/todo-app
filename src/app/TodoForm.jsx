import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  handleChane(event) {
    this.setState({ value: event.target.value })
  }

  handleClick(event) {
    this.props.onClick(this.state.value)
    this.setState({ value: '' })
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.value} onChange={this.handleChane.bind(this)} required />
        <button type="button" onClick={this.handleClick.bind(this)}>Add</button>
      </form>
    )
  }
}
