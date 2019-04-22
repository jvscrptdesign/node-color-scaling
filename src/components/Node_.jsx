import React from 'react';
import PropTypes from 'prop-types';
import '../styles/node_.css';

const Node = ({h, s, l}) => {
    let style = {
        backgroundColor: `hsl(${h}, ${s}%, ${l}%)`
    }
    return (
        <div className="node row" style={style}></div>
    );
}

Node.propTypes = {
    h: PropTypes.number.isRequired,
    s: PropTypes.number.isRequired,
    l: PropTypes.number.isRequired,
}

export default Node;
