import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorBar from './ColorBar_.jsx';
import InputBox from './InputBox_.jsx';

class HSLrow extends Component {
    render() {
        let inputSpace = {
            width:'75px',
            height:'67px'    
        }

        return (
            <div className="row">
                <div className="colorSectionLabel">{this.props.row}&nbsp;&nbsp;</div>
                <InputBox 
                    max={this.props.max} 
                    row={this.props.row} 
                    defaultValue={this.props.HSL1}
                    onChange={this.props.onChangeHSL1}
                    //TODO: too many properties with the same value -> choose one
                    hsltype={`${this.props.row}1`}
                    name={`${this.props.row}1`}
                    id={`${this.props.row}1`}/>

                <ColorBar
                    row={this.props.row}
                    activeHval={this.props.activeHval}
                    activehsl={this.props.activehsl}
                />
                
                {this.props.row===this.props.activehsl ? 
                    <InputBox 
                        max={this.props.max}
                        row={this.props.row}
                        defaultValue={this.props.HSL2}
                        onChange={this.props.onChangeHSL2}
                        //TODO: too many properties with the same value -> choose one
                        hsltype={`${this.props.row}2`}
                        name={`${this.props.row}2`}
                        id={`${this.props.row}2`}/> : 
                    <div style={ inputSpace }></div>}
            </div>
        );
    }
}

HSLrow.propTypes = {
    row: PropTypes.oneOf(['H', 'S', 'L']).isRequired,
    max: PropTypes.number.isRequired,
    HSL1: PropTypes.string.isRequired, // :S
    HSL2: PropTypes.string, // :S
    activeHval: PropTypes.number, //only for S, L rows
    activehsl: PropTypes.oneOf(['H', 'S', 'L', 'none']).isRequired,
}

export default HSLrow;
