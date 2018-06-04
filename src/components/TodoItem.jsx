import React, { Component } from 'react';
import Complete from '../images/complete.png';
import Incomplete from '../images/incomplete.png';
import Delete from '../images/delete.png';
import Edit from '../images/edit.png';

class TodoItem extends Component {
    render() {
        return (
            <li className="todo-item">
                <button
                    className="checkbox"
                    onClick={() => this.props.handleToggle(this.props.index)}
                >
                    {this.props.todo.done ? (
                        <img src={Complete} alt="Complete" />
                    ) : (
                        <img src={Incomplete} alt="Undo" />
                    )}
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
                // onClick={() => this.props.handleEdit(this.props.index)}
                >
                    <img src={Edit} alt="Edit" />
                </button>
                <button
                    onClick={() => this.props.handleDelete(this.props.index)}
                >
                    <img src={Delete} alt="Delete" />
                </button>
            </li>
        );
    }
}

export default TodoItem;
