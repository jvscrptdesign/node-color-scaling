import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorBar from './ColorBar_.jsx';
import InputBox from './InputBox_.jsx';
import Pointer from './Pointer_.jsx';
import '../styles/HSLrow_.css';

class HSLrow extends Component {
    render() {
        let {row, HSL1, HSL2, onChangeHSL1, onChangeHSL2, activeHval, activehsl} = this.props;
        let isVisible = row===activehsl ? "" : "hidden";

        return (
            <div className="HSLrow">
                <div className="pointerRow">
                    <Pointer pType="down" HSL={HSL1} row={row}/>
                </div>

                <div className="row colorBarRow" row={row} >
                    <div className="label">{row}&nbsp;&nbsp;</div>
                    <InputBox 
                        row={row}
                        defaultValue={HSL1}
                        onChange={onChangeHSL1}
                        //TODO: too many properties with the same value -> choose one
                        name={`${row}1`}
                        id={`${row}1`}/>

                    <ColorBar
                        row={row}
                        activeHval={activeHval}
                        activehsl={activehsl}
                        HSL1={HSL1}
                        HSL2={HSL2}/>
                    
                    <InputBox 
                        row={row}
                        defaultValue={HSL2}
                        onChange={onChangeHSL2}
                        //TODO: too many properties with the same value -> choose one
                        name={`${row}2`}
                        id={`${row}2`}
                        visibility={isVisible}/>
                </div>

                <div className="pointerRow">
                    <Pointer pType="up" HSL={HSL2} visibility={isVisible} row={row}/>
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
