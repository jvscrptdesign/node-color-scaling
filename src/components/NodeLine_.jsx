import React, { Component } from 'react';
import Node from './Node_.jsx';
import PropTypes from 'prop-types';
import '../styles/nodeLine_.css';

class NodeLine extends Component {
    constructor(props) {
        super(props);
        //pointless, only for practical purpose -> can SFC
        this.state = {
            numOfNodes: 14
        }
    }

    getHSL = (HSL1, HSL2, i) => {
        let range = HSL2 - HSL1,
            avg = range / this.state.numOfNodes;

        return HSL1 + avg * i;
    }

    buildNodeLine = () => {      
        let { H1, H2, S1, S2, L1, L2, activehsl } = this.props;

        let nodes = [];
        for (let i = 0; i <= this.state.numOfNodes; i++) {
            nodes.push(<Node 
                h={activehsl==='H' ? this.getHSL(H1, H2, i) : H1} 
                s={activehsl==='S' ? this.getHSL(S1, S2, i) : S1} 
                l={activehsl==='L' ? this.getHSL(L1, L2, i) : L1} key={`node_${i}`} />);
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
