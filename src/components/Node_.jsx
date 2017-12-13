import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/node_.css';

class Node extends Component {
    render() {
        let style = {
            backgroundColor: `hsl(${this.props.h}, ${this.props.s}%, ${this.props.l}%)`
        }
        return (
            <div 
                className="node row" 
                style={style}></div>
        );
    }
}

Node.propTypes = {
    h: PropTypes.number.isRequired,
    s: PropTypes.number.isRequired,
    l: PropTypes.number.isRequired,
}

export default Node;
