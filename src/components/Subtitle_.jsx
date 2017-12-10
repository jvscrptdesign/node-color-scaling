import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button_.jsx';

class Subtitle extends Component {
    render() {
        return (
            <div className="row subtitle" activehsl={this.props.activehsl}>
                <Button 
                    text={this.props.isModeScale ? 'Scale' : 'Set'} 
                    btnActive={true} btntype="big" 
                    onClick={this.props.scaleSet} 
                    id="ScaleSet"/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button text='H' btnActive={this.props.activehsl==='H'} btntype="small" onClick={this.props.clickH} id="H"/>
                <Button text='S' btnActive={this.props.activehsl==='S'} btntype="small" onClick={this.props.clickS} id="S"/>
                <Button text='L' btnActive={this.props.activehsl==='L'} btntype="small" onClick={this.props.clickL} id="L"/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                values
            </div>
        );
    }
}

Button.propTypes = {
    isModeScale: PropTypes.bool,
    btnActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    scaleSet: PropTypes.func,
    activehsl: PropTypes.oneOf(['H', 'S', 'L', 'none']),
    clickH: PropTypes.func,
    clickS: PropTypes.func,
    clickL: PropTypes.func,
}

export default Subtitle;
