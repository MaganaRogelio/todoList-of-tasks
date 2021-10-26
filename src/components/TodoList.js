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
                    handleToogleStatus={(e) => props.handleToogleStatus(e, index)}
                    handleDeleteTask={(e) => props.handleDeleteTask(e, index)}
                />
            )}
        </div>
    )
};

TodoList.propTypes = {
    tasks: PropTypes.array,
    handleToogleStatus: PropTypes.func,
    handleDeleteTask: PropTypes.func,
}

TodoList.defaultProps = {
    tasks: [],
}

export default TodoList;