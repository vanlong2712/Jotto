import React from 'react';
import PropTypes from 'prop-types';

const Congrats = (props) => {
    if(!props.success) {
        return null;
    }
    return (
        <div data-test="component-congrats" className="alert alert-success">
            <span data-test="congrats-message">Congratulations! You guessed the word!</span>
        </div>
    )
};

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
};

export default Congrats;
