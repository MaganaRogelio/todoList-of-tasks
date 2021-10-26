import React from 'react';
import Header from './Header'
import TodoList from './TodoList'
import Form from './Form'
import '../css/app.css'

class App extends React.Component {
    state = { todos: [] }

    componentDidMount() {
        this.setState({
            todos: [
                { content: "Sesión 1 (JSX)", done: true },
                { content: "Sesión 2 (Estado y propiedades)", done: true },
                { content: "Sesión 3 (Ciclo de vida)", done: true },
                { content: "Sesión 4 (Hooks)", done: false },
                { content: "Sesión 5 (Hooks)", done: false },
                { content: "Sesión 6 (Rutas)", done: false },
                { content: "Sesión 7 (PWA)", done: false },
                { content: "Sesión 8 (Material UI)", done: false },
            ]
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

    handleCreateTask = (content) => {
        this.setState({
            todos: this.state.todos.concat([{ content, done: false }])
        });
    }

    render() {
        return (
            <div className="wrapper">
                <div className="card frame">
                    <Header counter={this.state.todos.length} />
                    <TodoList tasks={this.state.todos}
                        handleToogleStatus={this.handleToogleStatus}
                        handleDeleteTask={this.handleDeleteTask} />
                    <Form handleCreateTask={this.handleCreateTask}/>
                    {/* {this.state.showButton && <button onClick={this.handleClickInit} className="button init">
                        Init
                    </button>} */}
                </div>
            </div>
        );
    }
}

export default App;
