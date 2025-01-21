import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  handleCheckAll = (event) => {
    const { handleCheckAll } = this.props;
    handleCheckAll(event.target.checked);
  };

  clearAllDone = () => {
    const { clearAllDone } = this.props;
    clearAllDone();
  };

  render() {
    const { todos } = this.props;
    const countDone = todos.reduce((pre, todo) => {
      return todo.done ? pre + 1 : pre;
    }, 0);
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheckAll}
            checked={countDone === total && total !== 0 ? true : false}
          />
        </label>
        <span>
          <span>
            Done {countDone} / Total {total}
          </span>
        </span>
        <button className="btn btn-danger" onClick={this.clearAllDone}>
          Clear done tasks
        </button>
      </div>
    );
  }
}
