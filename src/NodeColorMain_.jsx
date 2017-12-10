import React, { Component } from 'react';
import Subtitle from './components/Subtitle_.jsx';
import NodeLine from './components/NodeLine_.jsx';
import HSLrow from './components/HSLrow_.jsx';
import '../src/styles/nodeColorMain_.css';

class NodeColors extends Component {
    constructor(){
        super();
        this.state = {
            activehsl: "S",
            isModeScale: true,
        }
        this.scaleSetHandler = this.scaleSetHandler.bind(this); 
        this.click_H_handler = this.click_H_handler.bind(this); 
        this.click_S_handler = this.click_S_handler.bind(this);
        this.click_L_handler = this.click_L_handler.bind(this);
    }

    scaleSetHandler(e) {
        if(this.state.activehsl !== 'none'){
            this.setState({
                isModeScale: !this.state.isModeScale,
                activehsl: 'none'
            });
        } else {
            this.setState({
                activehsl: 'none'
            });
        }
    }

    click_H_handler(e) {
        e.stopPropagation();
        if(this.state.activehsl !== 'H') {
            this.setState({
                activehsl: "H",
                isModeScale: true
            });
        } else {
            this.setState({
                activehsl: "none",
                isModeScale: false
            });
        }
    }

    click_S_handler(e) {
        e.stopPropagation();
        if(this.state.activehsl !== 'S') {
            this.setState({
                activehsl: "S",
                isModeScale: true
            });
        } else {
            this.setState({
                activehsl: "none",
                isModeScale: false
            });
        }
    }

    click_L_handler(e) {
        e.stopPropagation();
        if(this.state.activehsl !== 'L') {
            this.setState({
                activehsl: "L",
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
                    clickH={this.click_H_handler} 
                    clickS={this.click_S_handler} 
                    clickL={this.click_L_handler}/>

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
