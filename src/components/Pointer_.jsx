import React from 'react';
import PropTypes from 'prop-types';
import '../styles/pointer_.css';

const Pointer = ({row, pType, visibility, HSL}) => {
    let left = (row==='H') ? `${HSL}px` : `${HSL*3.6}px`;

    return (
        <div 
            className={`pointer${pType}`}
            type={pType}
            style={{visibility: `${visibility}`}}>
			
            <div style={{left: left}}>{HSL}<i className={`fa-caret-${pType}`} style={{visibility: `${visibility}`}}/></div>
         </div>
        );
}

Pointer.propTypes = {
    pType: PropTypes.oneOf(['up', 'down']).isRequired,
    HSL: PropTypes.number.isRequired,
    row: PropTypes.string.isRequired,
    visibility: PropTypes.string,
}

export default Pointer;
