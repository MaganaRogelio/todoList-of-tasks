import React from 'react';
import Header from './Header'
import TodoList from './TodoList'
import Form from './Form'

function App() {
    return (
        <div className="wrapper">
            <div className="card frame">
                <Header />
                <TodoList />
                <Form />
            </div>
        </div>
    );
}

export default App;
