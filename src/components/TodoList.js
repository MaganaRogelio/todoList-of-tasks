import React from 'react';
import Todo from './Todo';
import '../css/todolist.css';

function TodoList() {
    const todos = ['Wake Up', 'Medite', 'Breakfast', 'Exercise'];

    return (
        <div className="list-wrapper">
            {/* {todos.map(() =>
                <Todo done />
            )} */}
            <Todo done />
            <Todo />
            <Todo done />
            <Todo />
        </div>
    )
};

export default TodoList;