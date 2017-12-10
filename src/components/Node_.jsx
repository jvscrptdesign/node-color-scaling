import React, { Component } from 'react';
import '../styles/node_.css';

class Node extends Component {
    render() {
        return (
            <div 
                className="node row" 
                nodeh={this.props.nodeh} 
                nodes={this.props.nodes} 
                nodel={this.props.nodel}></div>
        );
    }
}

export default Node;
