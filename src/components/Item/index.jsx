import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = { mouse: false };

  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  handleCheck = (id) => {
    const { updateTodos } = this.props;
    return (event) => {
      updateTodos(id, event.target.checked);
    };
  };

  handleDelete = (id) => {
    const { deleteTodos } = this.props;
    if (window.confirm("Are you sure deleting todo?")) {
      deleteTodos(id);
    }
  };

  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
          onClick={() => {
            this.handleDelete(id);
          }}
        >
          Delete
        </button>
      </li>
    );
  }
}
