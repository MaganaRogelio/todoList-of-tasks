import React from 'react';
import Todo from './Todo';
import '../css/todolist.css';
import PropTypes from 'prop-types'

function TodoList(props) {
    // const todos = ['Wake Up', 'Medite', 'Breakfast', 'Exercise'];

    return (
        <div className="list-wrapper">
            {props.tasks.map((task, index) =>
                <Todo
                    key={index}
                    done={task.done}
                    content={task.content}
                />
            )}
        </div>
    )
};

TodoList.propTypes = {
    tasks: PropTypes.array
}

TodoList.defaultProps = {
    tasks: [],
}

export default TodoList;