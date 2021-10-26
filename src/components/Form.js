import React from 'react';
import '../css/form.css';
import PropTypes from 'prop-types'

class Form extends React.Component {
    state = { value: '' }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleCreateTask(this.state.value);
        this.setState({ value: '' });
    }
    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    className='input'
                    placeholder='Add task'
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button className='button'>Add</button>
            </form>
        )
    }
};

Form.propTypes = {
    handleCreateTask: PropTypes.func,
}

export default Form;