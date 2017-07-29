import React from 'react'

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

  getStyles() {
    return {
      form: {
        padding: '20px 0',
        textAlign: 'center',
      },
      field: {
        marginRight: 10,
        height: 30,
        borderStyle: 'solid',
        borderColor: '#aaa',
        borderRadius: 10,
      },
      button: {
        width: 60,
        height: 35,
        padding: '3px 0 3px 0',
        borderStyle: 'none',
        borderRadius: '10px',
        backgroundColor: '#009688',
        color: 'white',
      },
    }
  }

  render() {
    const styles = this.getStyles()

    return (
      <form id="todoForm" style={styles.form}>
        <input type="text"
          value={this.state.value}
          onChange={this.handleChane.bind(this)}
          style={styles.field}
          required />
        <button type="button"
          style={styles.button}
          onClick={this.handleClick.bind(this)}>Add</button>
      </form>
    )
  }
}
