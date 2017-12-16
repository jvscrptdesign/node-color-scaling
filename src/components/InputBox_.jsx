import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/inputBox_.css';

class InputBox extends Component {
    render() {
        return (
                <div><input 
                    type="number" 
                    min="0"
                    max={this.props.row==='H' ? 360 : 100}
                    row={this.props.row}
                    defaultValue={this.props.defaultValue}
                    onChange={this.props.onChange}
                    //TODO: too many properties with the same value -> choose one
                    name={this.props.name}
                    id={this.props.id}
                    className="inputBox"
                    style={{visibility: `${this.props.visibility}`}}/></div>
        );
    }
}

InputBox.propTypes = {
    row: PropTypes.oneOf(['H', 'S', 'L']).isRequired,
    defaultValue: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.oneOf(['H1', 'H2', 'S1', 'S2', 'L1', 'L2']).isRequired,
}

export default InputBox;
