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
                <InputBox/>
                <ColorBar
                    row={this.props.row}
                    activeHval={this.props.activeHval}
                    activehsl={this.props.activehsl}
                />
                {this.props.row===this.props.activehsl ? <InputBox/> : <div style={ inputSpace }></div>}
            </div>
        );
    }
}

HSLrow.propTypes = {
    row: PropTypes.oneOf(['H', 'S', 'L']).isRequired,
    activeHval: PropTypes.string, //only for S, L rows
    activehsl: PropTypes.oneOf(['H', 'S', 'L', 'none']).isRequired,
}

export default HSLrow;
