import React from 'react';
import './todo-item.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ checked: event.target.checked });
    this.props.onChange(this.props.dataIndex);
  }

  handleClick(event) {
    this.props.onClick(this.props.dataIndex)
  }

  render() {
    const style = {
      checked: (this.state.checked) ? {
        textDecoration: "line-through",
      } : {},
      delBtn: {
        color: 'white',
        backgroundColor: 'red',
      }
    };

    return (
      <li id={this.props.dataIndex} style={style.checked}>
        <label>
          <input type="checkbox"
            checked={this.state.checked}
            onChange={this.handleChange} />
            {this.props.value}
        </label>
        <button type="button" style={style.delBtn}
          onClick={this.handleClick.bind(this)}>Del</button>
      </li>
    );
  }
}

export default TodoItem;
