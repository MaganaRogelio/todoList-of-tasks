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
            try {
                const response = await fetch(URL);
                const data = await response.json();
                setTodos(data);
            } catch (e) {
                console.error(e);
            }
        }
        getData()
    }, [])

    const requestBackEnd = (config, data) => {
        return fetch(config.url, {
            method: config.method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    const handleToogleStatus = async (e, content) => {

        const task = todos.find(t => t.content === content);
        // if (index > -1) newTodos[index].done = !newTodos[index].done
        if (task === undefined) return  // Verificar que exista en el array
        const value = !task.done;

        // Cambio en el servidor
        const config = {
            url: `${URL}/${task.id}`,
            method: "PATCH"
        };

        try {
            const response = await requestBackEnd(config, { done: value });
            if (!response.ok) throw new Error('Response not ok');
            //UI
            const newTodos = [...todos];
            const index = newTodos.findIndex(t => t.content === content);
            newTodos[index].done = !newTodos[index].done;
            setTodos(newTodos);
        } catch (e) {
            console.error(e);
        }
    }

    const handleDeleteTask = (e, content) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex(t => t.content === content);
        if (index > -1) newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    const handleCreateTask = async (content) => {
        if (content !== '') {
            const exist = todos.find(tsk => tsk.content === content);
            if (exist) alert(`"${content}" is an task listed`)
            else {
                // Cambio en el servidor
                const config = {
                    url: URL,
                    method: "POST"
                };
                const data = {
                    content,
                    done: false,
                };

                try {
                    const response = await requestBackEnd(config, data);
                    if (!response.ok) throw new Error('Response not ok');
                    const task = await response.json();
                    // UI
                    setTodos(todos.concat([task]));
                } catch (e) {
                    console.error(e);
                }

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
