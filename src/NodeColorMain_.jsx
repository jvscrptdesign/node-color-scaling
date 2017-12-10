import React, { Component } from 'react';
import Subtitle from './components/Subtitle_.jsx';
import NodeLine from './components/NodeLine_.jsx';
import HSLrow from './components/HSLrow_.jsx';
import '../src/styles/nodeColorMain_.css';

class NodeColors extends Component {
    constructor(){
        super();
        this.state = {
            activehsl: "H",
            h1: 0,
            h2: 70,
            s1: 100,
            s2: null,
            l1: 50,
            l2: null,
            isModeScale: true,
        }
        this.scaleSetHandler = this.scaleSetHandler.bind(this); 
        this.commonHSLhandler = this.commonHSLhandler.bind(this);
    }

    scaleSetHandler(e) {
        if(this.state.activehsl !== 'none'){
            this.setState({ isModeScale: !this.state.isModeScale });
        }
        this.setState({ activehsl: 'none' });
    }

    commonHSLhandler(e, hsl){
        e.stopPropagation();
        if(this.state.activehsl !== hsl) {
            this.setState({
                activehsl: hsl,
                isModeScale: true
            });
        } else {
            this.setState({
                activehsl: "none",
                isModeScale: false
            });
        }
    }

    render() {
        let activehsl = this.state.activehsl;

        return (
            <div className="nodeColorMain">
                <div className="title">Node color settings</div>
                
                <Subtitle 
                    activehsl={activehsl} 
                    isModeScale={this.state.isModeScale}
                    scaleSet={this.scaleSetHandler} 
                    clickH={(e) => this.commonHSLhandler(e, 'H')} 
                    clickS={(e) => this.commonHSLhandler(e, 'S')} 
                    clickL={(e) => this.commonHSLhandler(e, 'L')}
                />

                <NodeLine/>

                <HSLrow row="H" activehsl={activehsl} />
                <HSLrow row="S" activehsl={activehsl} activeHval='0'/>
                <HSLrow row="L" activehsl={activehsl} activeHval='0'/>

                <div className="title"/>
            </div>
        );
    }
}

export default NodeColors;
