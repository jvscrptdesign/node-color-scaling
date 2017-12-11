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
            H1: 0,
            H2: 70,
            S1: 100,
            S2: 100,
            L1: 50,
            L2: 50,
            isModeScale: true,
        }
        this.scaleSetHandler = this.scaleSetHandler.bind(this); 
        this.HSLbuttonHandler = this.HSLbuttonHandler.bind(this);
        this.HSLinputHandler = this.HSLinputHandler.bind(this);
    }

    scaleSetHandler(e) {
        if(this.state.activehsl !== 'none'){
            this.setState({ isModeScale: !this.state.isModeScale });
        }
        this.setState({ activehsl: 'none' });
    }

    HSLbuttonHandler(e, hsl){
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

    HSLinputHandler(e){
        this.setState({
            [e.target.id]: e.target.value //you can use hsltype or name in place of id
        });
    }

    render() {
        let activehsl = this.state.activehsl;

        return (
            <div>
                <div className="nodeColorMain">
                    <div className="title">Node color settings</div>
                    
                    <Subtitle 
                        activehsl={activehsl} 
                        isModeScale={this.state.isModeScale}
                        scaleSetToggle={this.scaleSetHandler} 
                        clickH={e => this.HSLbuttonHandler(e, 'H')} 
                        clickS={e => this.HSLbuttonHandler(e, 'S')} 
                        clickL={e => this.HSLbuttonHandler(e, 'L')}
                    />

                    <NodeLine/>

                    <HSLrow row="H" HSL1={`${this.state.H1}`} HSL2={`${this.state.H2}`} activehsl={activehsl} max={360}
                            onChangeHSL1={e=>this.HSLinputHandler(e)} onChangeHSL2={e=>this.HSLinputHandler(e)}/>

                    <HSLrow row="S" HSL1={`${this.state.S1}`} HSL2={`${this.state.S2}`} activehsl={activehsl} max={100} activeHval={0}
                            onChangeHSL1={e=>this.HSLinputHandler(e)} onChangeHSL2={e=>this.HSLinputHandler(e)}/>

                    <HSLrow row="L" HSL1={`${this.state.L1}`} HSL2={`${this.state.L2}`} activehsl={activehsl} max={100} activeHval={0}
                            onChangeHSL1={e=>this.HSLinputHandler(e)} onChangeHSL2={e=>this.HSLinputHandler(e)}/>

                    <div className="title"/>
                </div>

                <div><u><strong>state:</strong></u></div>
                <div>&nbsp;&nbsp;<strong>activeHSL:</strong> {this.state.activehsl}</div>
                <div>&nbsp;&nbsp;<strong>mode:</strong> {this.state.isModeScale ? 'scale' : 'set'}</div>
                <div>&nbsp;&nbsp;<strong>e.target.value:</strong> <div id="etarget"></div></div>
                <div>&nbsp;&nbsp;<strong>H1:</strong> {this.state.H1}</div>
                <div>&nbsp;&nbsp;<strong>H2:</strong> {this.state.H2}</div>
                <div>&nbsp;&nbsp;<strong>S1:</strong> {this.state.S1}</div>
                <div>&nbsp;&nbsp;<strong>S2:</strong> {this.state.S2}</div>
                <div>&nbsp;&nbsp;<strong>L1:</strong> {this.state.L1}</div>
                <div>&nbsp;&nbsp;<strong>L2:</strong> {this.state.L2}</div>
            </div>
        );
    }
}

export default NodeColors;
