import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'
import TodoDetails from './TodoDetails'
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

    const handleToogleStatus = async (e, title) => {

        const task = todos.find(t => t.title === title);
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
            const index = newTodos.findIndex(t => t.title === title);
            newTodos[index].done = !newTodos[index].done;
            setTodos(newTodos);
        } catch (e) {
            console.error(e);
        }
    }

    const handleDeleteTask = async (e, title) => {

        const task = todos.find(t => t.title === title);
        if (task === undefined) return  // Verificar que exista en el array

        // Cambio en el servidor
        const config = {
            url: `${URL}/${task.id}`,
            method: "DELETE"
        };

        try {
            const response = await requestBackEnd(config);
            if (!response.ok) throw new Error('Response not ok');
            //UI
            const newTodos = [...todos];
            const index = newTodos.findIndex(t => t.title === title);
            if (index > -1) newTodos.splice(index, 1);
            setTodos(newTodos);
        } catch (e) {
            console.error(e);
        }
    }

    const handleCreateTask = async (title) => {
        if (title !== '') {
            const exist = todos.find(tsk => tsk.title === title);
            if (exist) alert(`"${title}" is an task listed`)
            else {
                // Cambio en el servidor
                const config = {
                    url: URL,
                    method: "POST"
                };
                const data = {
                    title,
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
            <Router>
                <div className="card frame">
                    <Switch>
                        <Route path="/" exact render={props =>
                            <Home
                                {...props}
                                filtered={filtered}
                                show={show}
                                setShow={setShow}
                                handleToogleStatus={handleToogleStatus}
                                handleDeleteTask={handleDeleteTask}
                                handleCreateTask={handleCreateTask}
                            />
                        } />
                        <Route path="/details/:id" render={props =>
                            <TodoDetails {...props} url={URL} />}
                        />
                        {/* <Route component={NotFound} /> */}
                    </Switch>
                </div>
            </Router>
        </div>
    );
}


export default App;
