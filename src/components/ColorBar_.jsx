import React, { Component } from 'react';
import Pointer from './Pointer_.jsx';
import PropTypes from 'prop-types';
import '../styles/colorBar_.css';

class ColorBar extends Component {
    constructor() {
        super();
        this.buildColorBar = this.buildColorBar.bind(this);
    }

    buildColorBar = (row, grd) => {
        switch (row) {
            case 'H': 
                for(let i=0; i<=1; i+=0.01){
                    grd.addColorStop(i, `hsl(${360*i}, 100%, 50%)`);
                }
                break;
            case 'S':
                for(let j=0; j<=1; j+=0.01){
                    grd.addColorStop(j, `hsl(${this.props.activeHval}, ${100*j}%, 50%)`);
                }
                break;
            case 'L':
                for(let k=0; k<=1; k+=0.01){
                    grd.addColorStop(k, `hsl(${this.props.activeHval}, 100%, ${100*k}%)`);
                }
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
                    <Pointer
                        pType="down"
                        pVisible="true"
                        pActive="true"
                    />
                </div>

                <div className="canvasWrapper">
                    <canvas id={this.props.row} row={this.props.row}>
                    download a modern browser</canvas>
                </div>

                <div className="pointerRow">
                    {this.props.row===this.props.activehsl ? <Pointer
                        pType="up"
                        pVisible="true"
                        pActive="false"
                    /> : <div className="pointerSpace"></div>}
                </div>
            </div>
        );
    }
}

ColorBar.propTypes = {
    activeHval: PropTypes.string, //number?, TODO: required only if this.props.row=S || L
    row: PropTypes.oneOf(['H', 'S', 'L']).isRequired,
    activehsl: PropTypes.oneOf(['H', 'S', 'L', 'none']).isRequired,
}

export default ColorBar;
