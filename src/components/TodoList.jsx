import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    render() {
        return (
            <ul className="TodoList">
                {this.props.todos.map((todo, index) => {
                    return (
                        <Todo
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
