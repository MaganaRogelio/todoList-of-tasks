import React from 'react';
import PropTypes from 'prop-types'
import '../css/todo.css'
import Checkmark from './Checkmark'

const Todo = (props) => {

    return (
        <div className={`list-item ${props.done ? 'done' : ''}`}>
            <Checkmark done={props.done}
                handleToogleStatus={props.handleToogleStatus} />
            {props.title}
            <button className="delete is-pulled-right"
                onClick={props.handleDeleteTask} />
        </div>
    )

};

Todo.propTypes = {
    done: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    handleToogleStatus: PropTypes.func,
    handleDeleteTask: PropTypes.func,
}

export default Todo;