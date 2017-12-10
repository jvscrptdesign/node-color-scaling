import React, { Component } from 'react';
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
                    name={this.props.type}
                    id={this.props.type}
                    className="inputBox"/>
            </div>
        );
    }
}

export default InputBox;
