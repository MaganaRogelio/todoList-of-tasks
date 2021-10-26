import React from 'react';

class Todo extends React.Component {
    state = {
        done: true,
    }
    render() {
        return (
            <div className="list-item">
                Tarea
                <button className={`list-item ${this.state.done ? 'done' : ''}`} />
            </div>
        )
    }
};

export default Todo;