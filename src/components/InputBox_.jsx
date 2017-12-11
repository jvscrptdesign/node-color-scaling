import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/inputBox_.css';

class InputBox extends Component {
    render() {
        return (
            <div className="inputBoxWrapper">
                <div className="pointerRow"/>
                <input 
                    type="number" 
                    min="0"
                    max={this.props.max}
                    row={this.props.row}
                    defaultValue={this.props.defaultValue}
                    onChange={this.props.onChange}
                    //TODO: too many properties with the same value -> choose one
                    hsltype={this.props.hsltype}
                    name={this.props.hsltype}
                    id={this.props.hsltype}
                    className="inputBox"/>
            </div>
        );
    }
}

InputBox.propTypes = {
    max: PropTypes.number.isRequired,
    row: PropTypes.oneOf(['H', 'S', 'L']).isRequired,
    defaultValue: PropTypes.string.isRequired, // :S

    name: PropTypes.string.isRequired,
    id: PropTypes.oneOf(['H1', 'H2', 'S1', 'S2', 'L1', 'L2']).isRequired,
    hsltype: PropTypes.oneOf(['H1', 'H2', 'S1', 'S2', 'L1', 'L2']).isRequired
}

export default InputBox;
