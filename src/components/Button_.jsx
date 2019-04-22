import React from 'react';
import PropTypes from 'prop-types';
import '../styles/button_.css';

const Button = ({btnActive, btntype, onClick, text}) => {
    let isActive = btnActive ? "btnActive" : "btnDefault";
    let btnType = btntype==="big" ? "btnBig" : "btnSmall";

    return (
        <div className="buttonWrapper">
            <div 
                className={`btn_ ${isActive} ${btnType}`}
                btntype={btntype}
                onClick={onClick}>{text}</div>
        </div>
    );
}

Button.propTypes = {
    btnActive: PropTypes.bool.isRequired,
    btntype: PropTypes.oneOf(['btnBig', 'btnSmall']).isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
}

export default Button;
