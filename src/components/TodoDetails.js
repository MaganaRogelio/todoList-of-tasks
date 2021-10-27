import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

const TodoDetails = (props) => {
    const [todo, setTodo] = useState({ title: "", details: [] });
    const id = props.match.params.id;

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`${props.url}/${id}`);
                const task = await response.json();

                setTodo(task)
            } catch (e) {
                console.error(e);
            }
        };

        getData()
    }, [id, props.url]);

    return <>
        <div className="card-header">
            <h1 className="card-header-title header">
                {todo.title}
            </h1>
        </div>
        <div className="list-wrapper">
            {
                todo.details.map((content, i) =>
                    <div key={i} className="list-item">
                        { content }
                    </div>)
            }
        </div>
    </>
}

TodoDetails.propTypes = {
    url: PropTypes.string.isRequired,
}

export default TodoDetails;