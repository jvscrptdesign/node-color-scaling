import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/colorBar_.css';

class ColorBar extends Component {
    constructor(props) {
        super(props);
    }

    mountColorBar = activeHval => {
        const elem = document.getElementById(this.props.row);
        const ctx = elem.getContext("2d");
        const grd = ctx.createLinearGradient(0, 0, elem.width, 0);

        this.styleColorBar(grd, this.props.row, activeHval);

        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, elem.width, elem.height);
    }

    styleColorBar = (grd, type, activeHval) => {
        for(var i=0; i<=1; i+=0.01){
            grd.addColorStop(i, `hsl(${type==='H' ? 360*i : activeHval},${type==='S' ? 100*i : 100}%,${type==='L' ? 100*i : 50}%)`);
        }
    }

    componentWillUpdate(nextProps, nextState) {
        this.mountColorBar(nextProps.activeHval);
    }

    componentDidMount() {
        this.mountColorBar(this.props.activeHval);
    }

    render() {
        return (
            <canvas id={this.props.row} row={this.props.row}>download a modern browser</canvas>
        );
    }
}

ColorBar.propTypes = {
    activeHval: PropTypes.number, //string?, TODO: required only if this.props.row=S || L
    row: PropTypes.oneOf(['H', 'S', 'L']).isRequired,
    activehsl: PropTypes.oneOf(['H', 'S', 'L', 'none']).isRequired,
    HSL1: PropTypes.number.isRequired,
    HSL2: PropTypes.number.isRequired
}

export default ColorBar;
