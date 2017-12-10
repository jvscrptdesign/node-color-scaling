import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/button_.css';

class Button extends Component {
    render() {
        let isActive = this.props.btnActive ? "btnActive" : "btnDefault";
        let btnType = this.props.btntype==="big" ? "btnBig" : "btnSmall";

        return (
            <div className="buttonWrapper">
                <div 
                    className={`btn_ ${isActive} ${btnType}`}
                    btntype={this.props.btntype}
                    onClick={this.props.onClick}>
                        {this.props.text}
                </div>
            </div>
        );
    }
}

Button.propTypes = {
    btnActive: PropTypes.bool.isRequired,
    btntype: PropTypes.oneOf(['btnBig', 'btnSmall']).isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
}

export default Button;
