import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/pointer_.css';

class Pointer extends Component {
    render() {
        return (
            <div 
                className={this.props.pType==='up' ? "pointerUp" : "pointerDown"}
                type={this.props.pType}>
                <div>{this.props.HSL}<i className={this.props.pType==='up' ? "fa-caret-up" : "fa-caret-down"}/></div>
            </div>
        );
    }
}

Pointer.propTypes = {
    pType: PropTypes.oneOf(['up', 'down']).isRequired,
    HSL: PropTypes.string.isRequired
}

export default Pointer;
