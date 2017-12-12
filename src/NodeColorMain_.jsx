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
            activeHval: 0,
            H1: 0,
            H2: 60,
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
        e.stopPropagation();
        if(this.state.activehsl !== 'none'){
            this.setState({ 
                isModeScale: !this.state.isModeScale,
                activeHval: this.state.H1
            });
        }
        this.setState({ activehsl: 'none' });
    }

    HSLbuttonHandler(e, hsl){
        e.stopPropagation();
        if(this.state.activehsl !== hsl) {
            this.setState({
                activehsl: hsl,
                isModeScale: true,
            });
            if(hsl !== 'H') {
                this.setState({
                    activeHval: this.state.H1
                });
            }
        } else {
            this.setState({ //when neither H, S nor L are clicked
                activehsl: "none",
                isModeScale: false,
                activeHval: this.state.H1
            });
        }
    }

    HSLinputHandler(e){
        e.stopPropagation();
        this.setState({
            //can use name in place of id; ditch parseint if it messes up nodeStyle (H, S, L)
            [e.target.id]: parseInt(e.target.value, 10), 
        });
        if (e.target.id === 'H1' || e.target.id === 'H2') { //H1 or H2 is clicked
            this.setState({ activeHval: e.target.value  }); 
        }
    }

    render() {
        let activehsl = this.state.activehsl,
            isModeScale = this.state.isModeScale,
            H1 = this.state.H1,
            H2 = this.state.H2,
            S1 = this.state.S1,
            S2 = this.state.S2,
            L1 = this.state.L1,
            L2 = this.state.L2

        return (
            <div>
                <div className="nodeColorMain">
                    <div className="title">Node color settings</div>
                    
                    <Subtitle 
                        activehsl={activehsl} 
                        isModeScale={isModeScale}
                        scaleSetToggle={this.scaleSetHandler} 
                        clickH={e => this.HSLbuttonHandler(e, 'H')} 
                        clickS={e => this.HSLbuttonHandler(e, 'S')} 
                        clickL={e => this.HSLbuttonHandler(e, 'L')}
                    />

                    <NodeLine/>

                    <HSLrow row="H" HSL1={`${H1}`} HSL2={`${H2}`} activehsl={activehsl}
                            onChangeHSL1={e=>this.HSLinputHandler(e)} onChangeHSL2={e=>this.HSLinputHandler(e)}/>

                    <HSLrow row="S" HSL1={`${S1}`} HSL2={`${S2}`} activehsl={activehsl} activeHval={500}
                            onChangeHSL1={e=>this.HSLinputHandler(e)} onChangeHSL2={e=>this.HSLinputHandler(e)}/>

                    <HSLrow row="L" HSL1={`${L1}`} HSL2={`${L2}`} activehsl={activehsl} activeHval={500}
                            onChangeHSL1={e=>this.HSLinputHandler(e)} onChangeHSL2={e=>this.HSLinputHandler(e)}/>

                    <div className="title"/>
                </div>

                <div><u><strong>state:</strong></u></div>
                <div>&nbsp;&nbsp;<strong>activeHSL:</strong> {activehsl}</div>
                <div>&nbsp;&nbsp;<strong>activeHval:</strong> {this.state.activeHval}</div>
                <div>&nbsp;&nbsp;<strong>mode:</strong> {isModeScale ? 'scale' : 'set'}</div>
                <div>&nbsp;&nbsp;<strong>H1:</strong> {H1}</div>
                <div>&nbsp;&nbsp;<strong>H2:</strong> {H2}</div>
                <div>&nbsp;&nbsp;<strong>S1:</strong> {S1}</div>
                <div>&nbsp;&nbsp;<strong>S2:</strong> {S2}</div>
                <div>&nbsp;&nbsp;<strong>L1:</strong> {L1}</div>
                <div>&nbsp;&nbsp;<strong>L2:</strong> {L2}</div>
            </div>
        );
    }
}

export default NodeColors;
