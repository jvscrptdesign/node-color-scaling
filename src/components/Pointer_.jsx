import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/pointer_.css';

class Pointer extends Component {
    render() {
        return (
            <div 
                className={`pointer${this.props.pType}`}
                type={this.props.pType}
                style={{visibility: `${this.props.visibility}`}}>
                <div>{this.props.HSL}<i className={`fa-caret-${this.props.pType}`} style={{visibility: `${this.props.visibility}`}}/></div>
            </div>
        );
    }
}

Pointer.propTypes = {
    pType: PropTypes.oneOf(['up', 'down']).isRequired,
    HSL: PropTypes.number.isRequired
}

export default Pointer;
