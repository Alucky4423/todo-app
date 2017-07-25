import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChane = this.handleChane.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChane(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.value} onChange={this.handleChane} />
        <button type="button" onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}

export default TodoForm;