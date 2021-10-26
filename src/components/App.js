import React from 'react';
import Header from './Header'
import TodoList from './TodoList'
import Form from './Form'
import '../css/app.css'

class App extends React.Component {
    state = { todos: [], showButton: true }

    handleClickInit = (e) => {
        this.setState({
            todos: [
                { content: "Tarea 1", done: true },
                { content: "Tarea 2", done: false },
                { content: "Tarea 3", done: true },
                { content: "Tarea 4", done: false },
                { content: "Tarea 5", done: true },
                { content: "Tarea 6", done: false },
                { content: "Tarea 7", done: true },
                { content: "Tarea 8", done: false },
                { content: "Tarea 9", done: true },
                { content: "Tarea 10", done: false },
            ],
            showButton: false,
        })
    }

    handleToogleStatus = (e, item) => {
        const todos = [...this.state.todos];
        todos[item].done = !todos[item].done;
        this.setState({ todos })
    }

    handleDeleteTask = (e, item) => {
        const todos = [...this.state.todos];
        todos.splice(item, 1);
        this.setState({ todos })
    }

    render() {
        return (
            <div className="wrapper">
                <div className="card frame">
                    <Header counter={this.state.todos.length} />
                    <TodoList tasks={this.state.todos} 
                    handleToogleStatus={this.handleToogleStatus}
                    handleDeleteTask={this.handleDeleteTask} />
                    <Form />
                    {this.state.showButton && <button onClick={this.handleClickInit} className="button init">
                        Init
                    </button>}
                </div>
            </div>
        );
    }
}

export default App;
