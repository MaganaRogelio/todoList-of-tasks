import React from 'react';
import '../css/form.css';

function Form() {
    return (
        <form>
            <input
                type='text'
                className='input'
                placeholder='Add task'
            />
            <button className='button'>Add</button>
        </form>
    )
};

export default Form;