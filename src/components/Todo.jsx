import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <li className="Todo">
                <button
                    onClick={() => this.props.handleToggle(this.props.index)}
                >
                    {this.props.todo.done ? 'Undo' : 'Complete'}
                </button>
                <span
                    style={{
                        textDecoration: this.props.todo.done
                            ? 'line-through'
                            : 'none'
                    }}
                >
                    {this.props.todo.value}
                </span>
                <button
                    onClick={() => this.props.handleDelete(this.props.index)}
                >
                    Delete
                </button>
            </li>
        );
    }
}

export default Todo;
