import React, { useState, useEffect } from 'react';
import Header from './Header'
import TodoList from './TodoList'
import Form from './Form'
import '../css/app.css'

const App = () => {
    const [todos, setTodos] = useState([]);
    const [show, setShow] = useState(true);

    const URL = "http://localhost:4000/todos";

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(URL);
            const data = await response.json();
            setTodos(data);
        }

        getData()
    }, [])

    const handleToogleStatus = (e, content) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex(t => t.content === content);
        if (index > -1) newTodos[index].done = !newTodos[index].done
        setTodos(newTodos);
    }

    const handleDeleteTask = (e, content) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex(t => t.content === content);
        if (index > -1) newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    const handleCreateTask = (content) => {
        if (content !== '') {
            const newTodos = [...todos];
            const exist = newTodos.find(tsk => tsk.content === content);
            if (exist) alert(`"${content}" is an task listed`)
            else {
                newTodos.push({ content, done: false });
                setTodos(newTodos);
            }
        } else alert('Fill task content pls');
    }

    const filtered = todos.filter(e => !e.done || e.done === show);

    return (
        <div className="wrapper">
            <div className="card frame">
                <Header counter={filtered.length}
                    show={show}
                    toogleDone={setShow} />
                <TodoList tasks={filtered}
                    handleToogleStatus={handleToogleStatus}
                    handleDeleteTask={handleDeleteTask} />
                <Form handleCreateTask={handleCreateTask} />
            </div>
        </div>
    );
}


export default App;
