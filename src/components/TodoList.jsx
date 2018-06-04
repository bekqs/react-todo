import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        return (
            <ul className="todo-list">
                {this.props.todos.map((todo, index) => {
                    return (
                        <TodoItem
                            key={index}
                            index={index}
                            todo={todo}
                            handleToggle={this.props.handleToggle}
                            handleDelete={this.props.handleDelete}
                        />
                    );
                })}
            </ul>
        );
    }
}

export default TodoList;
