import React, { useState } from 'react';
import '../css/form.css';
import PropTypes from 'prop-types'

// class Form extends React.Component {
const Form = (props) => {
    const [value, setValue] = useState(''); // state = { value: '' }

    // handleChange = (e) => {
    const handleChange = (e) => {
        setValue(e.target.value)    // this.setState({ value: e.target.value });
    }

    // handleSubmit = (e) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleCreateTask(value);   // this.props.handleCreateTask(this.state.value);
        setValue('');   // this.setState({ value: '' });
    }
    // render() {
    return (
        // <form onSubmit={this.handleSubmit}>
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                className='input'
                placeholder='Add task'
                value={value} /* value={this.state.value} */
                onChange={handleChange} /* onChange={this.handleChange} */
            />
            <button className='button'>Add</button>
        </form>
    )
}


Form.propTypes = {
    handleCreateTask: PropTypes.func,
}

export default Form;