import React, { Component } from 'react';
import Back from '../images/back.png';

class TodoAdd extends Component {
    render() {
        return (
            <form
                className="todo-add"
                onSubmit={e => this.props.handleSubmit(e)}
            >
                <button
                    className="back"
                    onClick={() => this.props.toggleForm}
                    formNoValidate
                >
                    <img src={Back} alt="Back" />
                </button>
                <h2>Add new task</h2>
                <input
                    type="text"
                    className="input"
                    defaultValue={this.props.inputValue}
                    placeholder="New task"
                    onChange={e => this.props.handleChange(e)}
                    required
                />
                <h3>Choose priority for this task</h3>
                <input
                    type="radio"
                    name="priority"
                    className="radio"
                    id="important"
                    defaultChecked
                />
                <label htmlFor="important">Important</label>
                <input
                    type="radio"
                    name="priority"
                    className="radio"
                    id="normal"
                />
                <label htmlFor="normal">Normal</label>
                <input
                    type="radio"
                    name="priority"
                    className="radio"
                    id="low"
                />
                <label htmlFor="low">Low</label>
                <button className="button add">+ Add task</button>
            </form>
        );
    }
}

export default TodoAdd;
