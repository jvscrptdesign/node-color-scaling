import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorBar from './ColorBar_.jsx';
import InputBox from './InputBox_.jsx';
import Pointer from './Pointer_.jsx';

class HSLrow extends Component {
    render() {
        let inputSpace = {
            width:'75px'   
        }
        let label = {
            height:'25px',
            paddingTop:'2px'
        }
        let shrinkRow = {
            height: '26px'
        }

        return (
            <div>
                <div className="pointerRow">
                    <Pointer pType="down" HSL={this.props.HSL1}/>
                </div>

                <div className="row" row={this.props.row} style={shrinkRow}>
                    <div style={label}>{this.props.row}&nbsp;&nbsp;</div>
                    <InputBox 
                        row={this.props.row}
                        defaultValue={this.props.HSL1}
                        onChange={this.props.onChangeHSL1}
                        //TODO: too many properties with the same value -> choose one
                        name={`${this.props.row}1`}
                        id={`${this.props.row}1`}/>

                    <ColorBar
                        row={this.props.row}
                        activeHval={this.props.activeHval}
                        activehsl={this.props.activehsl}
                        HSL1={this.props.HSL1}
                        HSL2={this.props.HSL2}/>
                    
                    <InputBox 
                        row={this.props.row}
                        defaultValue={this.props.HSL2}
                        onChange={this.props.onChangeHSL2}
                        //TODO: too many properties with the same value -> choose one
                        name={`${this.props.row}2`}
                        id={`${this.props.row}2`}
                        visibility={this.props.row===this.props.activehsl ? "" : "hidden"}/>
                </div>

                <div className="pointerRow">
                    <Pointer pType="up" HSL={this.props.HSL2} visibility={this.props.row===this.props.activehsl ? "" : "hidden"}/>
                </div>
            </div>
        );
    }
}

HSLrow.propTypes = {
    row: PropTypes.oneOf(['H', 'S', 'L']).isRequired,
    HSL1: PropTypes.number.isRequired,
    HSL2: PropTypes.number,
    activeHval: PropTypes.number, //only for S, L rows
    activehsl: PropTypes.oneOf(['H', 'S', 'L', 'none']).isRequired,
}

export default HSLrow;
