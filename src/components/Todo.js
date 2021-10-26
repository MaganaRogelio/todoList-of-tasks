import React from 'react';
import PropTypes from 'prop-types'
import '../css/todo.css'
import Checkmark from './Checkmark'

class Todo extends React.Component {
    state = {
        done: true,
    }
    render() {
        return (
            <div className={`list-item ${this.props.done ? 'done' : ''}`}>
                <Checkmark done={this.props.done}/>
                {this.props.content}
                <button className="delete is-pulled-right" />
            </div>
        )
    }
};

Todo.propTypes = {
    done: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired
}

export default Todo;