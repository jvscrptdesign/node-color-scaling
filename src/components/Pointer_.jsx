import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/pointer_.css';

class Pointer extends Component {
    render() {
        let {pType, visibility, HSL} = this.props;

        return (
            <div 
                className={`pointer${pType}`}
                type={pType}
                style={{visibility: `${visibility}`}}>
                <div>{HSL}<i className={`fa-caret-${pType}`} style={{visibility: `${visibility}`}}/></div>
            </div>
        );
    }
}

Pointer.propTypes = {
    pType: PropTypes.oneOf(['up', 'down']).isRequired,
    HSL: PropTypes.number.isRequired
}

export default Pointer;
