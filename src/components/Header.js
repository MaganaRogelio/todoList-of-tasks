import React from 'react';
import PropTypes from 'prop-types'
import ShowHide from './ShowHide'

function Header(props) {
    return (
        <div className="card-header">
            <h1 className="card-header-title header">
                There are {props.counter} tasks
            </h1>
            <ShowHide show={props.show} toggleDone={props.toogleDone} />
        </div>
    )
};

Header.propTypes = {
    counter: PropTypes.number.isRequired,
    show: PropTypes.bool.isRequired,
    toggleDone: PropTypes.func,
}

Header.defaultProps = {
    counter: 0,
}

export default Header;
