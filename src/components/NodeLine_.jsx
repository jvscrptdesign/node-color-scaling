import React, { Component } from 'react';
import Node from './Node_.jsx';
import PropTypes from 'prop-types';
import '../styles/nodeLine_.css';

class NodeLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfNodes: 14
        }
        this.getH = this.getH.bind(this);
        this.getS = this.getS.bind(this);
        this.getL = this.getL.bind(this);
        this.buildNodeLine = this.buildNodeLine.bind(this);
    }
    //TODO: recognize HSL btn, and scale/set btn changes
    getH(i) {
        let hRange = this.props.H2 - this.props.H1,
            hAvg = hRange / this.state.numOfNodes;

        return this.props.H1 + hAvg * i;
    }

    getS(i) {
        let sRange = this.props.S2 - this.props.S1,
            sAvg = sRange / this.state.numOfNodes;

        return this.props.S1 + sAvg * i;
    }

    getL(i) {
        let lRange = this.props.L2 - this.props.L1,
            lAvg = lRange / this.state.numOfNodes;

        return this.props.L1 + lAvg * i;
    }

    buildNodeLine() {
        let H1 = this.props.H1,
            S1 = this.props.S1,
            L1 = this.props.L1,
            aHSL = this.props.activehsl;

        var nodes = [];
        for (var i = 0; i <= this.state.numOfNodes; i++) {
            nodes.push(<Node 
                h={aHSL==='H' ? this.getH(i) : H1} 
                s={aHSL==='S' ? this.getS(i) : S1} 
                l={aHSL==='L' ? this.getL(i) : L1} key={i} />);
        }
        return nodes;
    }

    //componentWillUpdate (nextProps, nextState)

    render() {
        return (
            <div className="nodeLine" id="nodeLine">
                {this.buildNodeLine()}
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
