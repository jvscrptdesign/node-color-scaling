import React, { Component } from 'react';
import Node from './Node_.jsx';
import '../styles/nodeLine_.css';

class NodeLine extends Component {
    render() {
        return (
            <div className="nodeLine">
                <div>
                    <Node/>
                    <Node/>
                    <Node/>
                    <Node/>
                    <Node/>
                    <Node/>
                    <Node/>
                    <Node/>
                    <Node/>
                    <Node/>
                    <Node/>
                    <Node/>
                    <Node/>
                    <Node/>
                </div>
            </div>
        );
    }
}

export default NodeLine;
