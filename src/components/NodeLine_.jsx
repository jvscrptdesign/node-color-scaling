import React, { Component } from 'react';
import Node from './Node_.jsx';
import PropTypes from 'prop-types';
import '../styles/nodeLine_.css';

class NodeLine extends Component {
    render() {
        let H1 = this.props.H1,
            H2 = this.props.H2,
            S1 = this.props.S1,
            S2 = this.props.S2,
            L1 = this.props.L1,
            L2 = this.props.L2,
            aHSL = this.props.activehsl;

        let hRange = H2 > H1 ? H2 - H1 : H1 - H2,
            hAvg = hRange / 13,
            sRange = S2 > S1 ? S2 - S1 : S1 - S2,
            sAvg = sRange / 13,
            lRange = L2 > L1 ? L2 - L1 : L1 - L2,
            lAvg = lRange / 13;

        //componentWillUpdate (nextProps, nextState)
        
        function getH(i) {
            return H1 + hAvg * i;
        }
        function getS(i) {
            return S1 + sAvg * i;
        }
        function getL(i) {
            return L1 + lAvg * i;
        }

        return (
            <div className="nodeLine">
                <div>
                    {/*map*/}
                    <Node h={aHSL==='H' ? getH(0) : H1} s={aHSL==='S' ? getS(0) : S1} l={aHSL==='L' ? getL(0) : L1}/>
                    <Node h={aHSL==='H' ? getH(1) : H1} s={aHSL==='S' ? getS(1) : S1} l={aHSL==='L' ? getL(1) : L1}/>
                    <Node h={aHSL==='H' ? getH(2) : H1} s={aHSL==='S' ? getS(2) : S1} l={aHSL==='L' ? getL(2) : L1}/>
                    <Node h={aHSL==='H' ? getH(3) : H1} s={aHSL==='S' ? getS(3) : S1} l={aHSL==='L' ? getL(3) : L1}/>
                    <Node h={aHSL==='H' ? getH(4) : H1} s={aHSL==='S' ? getS(4) : S1} l={aHSL==='L' ? getL(4) : L1}/>
                    <Node h={aHSL==='H' ? getH(5) : H1} s={aHSL==='S' ? getS(5) : S1} l={aHSL==='L' ? getL(5) : L1}/>
                    <Node h={aHSL==='H' ? getH(6) : H1} s={aHSL==='S' ? getS(6) : S1} l={aHSL==='L' ? getL(6) : L1}/>
                    <Node h={aHSL==='H' ? getH(7) : H1} s={aHSL==='S' ? getS(7) : S1} l={aHSL==='L' ? getL(7) : L1}/>
                    <Node h={aHSL==='H' ? getH(8) : H1} s={aHSL==='S' ? getS(8) : S1} l={aHSL==='L' ? getL(8) : L1}/>
                    <Node h={aHSL==='H' ? getH(9) : H1} s={aHSL==='S' ? getS(9) : S1} l={aHSL==='L' ? getL(9) : L1}/>
                    <Node h={aHSL==='H' ? getH(10) : H1} s={aHSL==='S' ? getS(10) : S1} l={aHSL==='L' ? getL(10) : L1}/>
                    <Node h={aHSL==='H' ? getH(11) : H1} s={aHSL==='S' ? getS(11) : S1} l={aHSL==='L' ? getL(11) : L1}/>
                    <Node h={aHSL==='H' ? getH(12) : H1} s={aHSL==='S' ? getS(12) : S1} l={aHSL==='L' ? getL(12) : L1}/>
                    <Node h={aHSL==='H' ? getH(13) : H1} s={aHSL==='S' ? getS(13) : S1} l={aHSL==='L' ? getL(13) : L1}/>
                </div>
            </div>
        );
    }
}

NodeLine.propTypes = {
    H1: PropTypes.number.isRequired,
    H2: PropTypes.number.isRequired,
    S1: PropTypes.number.isRequired,
    S2: PropTypes.number.isRequired,
    L1: PropTypes.number.isRequired,
    L2: PropTypes.number.isRequired,
    activehsl: PropTypes.string.isRequired,
}

export default NodeLine;
