import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/inputBox_.css';

class InputBox extends Component {
    render() {
        let {row, defaultValue, onChange, name, id, visibility} = this.props;

        return (
            <div><input 
                type="number" 
                min="0"
                max={row==='H' ? 360 : 100}
                defaultValue={defaultValue}
                onChange={onChange}
                //TODO: too many properties with the same value -> choose one
                name={name}
                id={id}
                className="inputBox"
                style={{visibility: `${visibility}`}}/></div>
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
