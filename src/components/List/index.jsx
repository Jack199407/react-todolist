import React, { Component } from "react";
import Item from "../Item";
import "./index.css";

export default class List extends Component {
  render() {
    const { todos, updateTodos, deleteTodos } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((todo) => {
          return (
            <Item
              key={todo.id}
              {...todo}
              updateTodos={updateTodos}
              deleteTodos={deleteTodos}
            />
          );
        })}
      </ul>
    );
  }
}
