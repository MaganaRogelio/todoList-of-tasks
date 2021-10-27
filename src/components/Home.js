import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';

const Home = (props) => {
    return <>
        <Header counter={props.filtered.length}
            show={props.show}
            toogleDone={props.setShow} />
        <TodoList tasks={props.filtered}
            handleToogleStatus={props.handleToogleStatus}
            handleDeleteTask={props.handleDeleteTask} />
        <Form handleCreateTask={props.handleCreateTask} />
    </>
}

Home.propTypes = {
    filtered: PropTypes.array.isRequired,
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
    handleToogleStatus: PropTypes.func.isRequired,
    handleDeleteTask: PropTypes.func.isRequired,
    handleCreateTask: PropTypes.func.isRequired,
}

export default Home;