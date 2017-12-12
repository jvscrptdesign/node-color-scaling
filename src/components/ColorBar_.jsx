import React, { Component } from 'react';
import Pointer from './Pointer_.jsx';
import PropTypes from 'prop-types';
import '../styles/colorBar_.css';

class ColorBar extends Component {
    constructor() {
        super();
        this.buildColorBar = this.buildColorBar.bind(this);
        this.genericColorBar = this.genericColorBar.bind(this);
    }

    genericColorBar = (grd, type) => { //@param: h, s, l later
        for(var i=0; i<=1; i+=0.01){
            grd.addColorStop(i, `hsl(
                                    ${type==='H' ? 360*i : this.props.activeHval}, 
                                    ${type==='S' ? 100*i : 100}%, 
                                    ${type==='L' ? 100*i : 50}%
                                )`);
        }
    }

    buildColorBar = (row, grd) => {
        switch (row) { //i u click H the other 2 are not changed!!! -> ERROR
            case 'H': 
                /*for(let i=0; i<=1; i+=0.01){
                    grd.addColorStop(i, `hsl(${360*i}, 100%, 50%)`);
                }*/
                this.genericColorBar(grd, 'H');
                break;
            case 'S':
                /*for(let j=0; j<=1; j+=0.01){
                    grd.addColorStop(j, `hsl(${this.props.activeHval}, ${100*j}%, 50%)`);
                }*/
                this.genericColorBar(grd, 'S');
                break;
            case 'L':
                /*for(let k=0; k<=1; k+=0.01){
                    grd.addColorStop(k, `hsl(${this.props.activeHval}, 100%, ${100*k}%)`);
                }*/
                this.genericColorBar(grd, 'L');                
                break;
            default:
                throw new Error(`unknown row: ${this.props.row}`);
        }
    };

    componentDidMount() {
        const elem = document.getElementById(this.props.row);
        const ctx = elem.getContext("2d");
        const grd = ctx.createLinearGradient(0, 0, elem.width, 0);

        this.buildColorBar(this.props.row, grd);

        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, elem.width, elem.height);
    }

    render() {
        return (
            <div>
                <div className="pointerRow">
                    <Pointer pType="down" HSL={this.props.HSL1}/>
                </div>

                <div className="canvasWrapper">
                    <canvas id={this.props.row} row={this.props.row}>
                    download a modern browser</canvas>
                </div>

                <div className="pointerRow">
                    {this.props.row===this.props.activehsl ? 
                        <Pointer pType="up" HSL={this.props.HSL2}/> : <div className="pointerSpace"></div>}
                </div>
            </div>
        );
    }
}

ColorBar.propTypes = {
    activeHval: PropTypes.number, //string?, TODO: required only if this.props.row=S || L
    row: PropTypes.oneOf(['H', 'S', 'L']).isRequired,
    activehsl: PropTypes.oneOf(['H', 'S', 'L', 'none']).isRequired,
    HSL1: PropTypes.string.isRequired,
    HSL2: PropTypes.string.isRequired
}

export default ColorBar;
