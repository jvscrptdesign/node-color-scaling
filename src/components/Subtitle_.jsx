import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button_.jsx';

const Subtitle = ({activehsl, isModeScale, scaleSetToggle, clickH, clickS, clickL}) => {
    return (
        <div className="row subtitle" activehsl={activehsl}>
            <Button 
                text={isModeScale ? 'Scale' : 'Set'} 
                btnActive={isModeScale} 
                btntype="big" 
                onClick={scaleSetToggle} 
                id="ScaleSet"/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button text='H' btnActive={activehsl==='H'} btntype="small" onClick={clickH} id="H"/>
            <Button text='S' btnActive={activehsl==='S'} btntype="small" onClick={clickS} id="S"/>
            <Button text='L' btnActive={activehsl==='L'} btntype="small" onClick={clickL} id="L"/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            values
        </div>
    );
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
