import React, { Component } from 'react';

class AddTodo extends Component {
    render() {
        return (
            <form
                className="AddTodo"
                onSubmit={e => this.props.handleSubmit(e)}
            >
                <input
                    type="text"
                    defaultValue={this.props.inputValue}
                    placeholder="Add To-Do"
                    onChange={e => this.props.handleChange(e)}
                />
                <button>+ Add</button>
            </form>
        );
    }
}

export default AddTodo;
