import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends Component {
    state = {
        inputValue: '',
        todos: []
    };

    componentDidMount() {
        // 1. Reinstate localStorage
        const localStorageRef = localStorage.getItem('todos');

        // 2. Update state if it exists in localStorage
        if (localStorageRef) {
            this.setState({ todos: JSON.parse(localStorageRef) });
        }
    }

    componentDidUpdate() {
        // 1. Get state
        const todos = this.state.todos;

        // 2. Save todos to localStorage
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    handleChange = e => {
        // 1. Update state.inputValue to whatever we type inside form
        this.setState({ inputValue: e.target.value });
    };

    handleSubmit = e => {
        // 1. Prevent from submitting
        e.preventDefault();

        // 2. Get state
        const todos = this.state.todos;

        // 3. Create new to-do
        const newTodo = {
            value: this.state.inputValue,
            done: false
        };

        // 4. If input isn't empty, append new to-do to existing todos state
        if (newTodo.value.replace(/\s/g, '').length > 0) {
            todos.push(newTodo);
        }

        // 5. Update state
        this.setState({ todos, inputValue: '' });

        // 6. Reset form input
        e.target.reset();
    };

    handleToggle = index => {
        const todos = this.state.todos;
        todos[index].done = !todos[index].done;
        this.setState({ todos });
    };

    handleDelete = index => {
        const todos = this.state.todos;
        todos.splice(index, 1);
        this.setState({ todos });
    };

    render() {
        return (
            <div className="App">
                <h2>Form</h2>
                <AddTodo
                    inputValue={this.state.inputValue}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <TodoList
                    todos={this.state.todos}
                    handleToggle={this.handleToggle}
                    handleDelete={this.handleDelete}
                />
            </div>
        );
    }
}

export default App;
