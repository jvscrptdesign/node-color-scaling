import React, { Component } from 'react';
import '../styles/pointer_.css';

class State extends Component {
    render() {
        return (
            <div>
                <div><u><strong>state:</strong></u></div>
                <div>&nbsp;&nbsp;<strong>activeHSL:</strong> {this.props.activehsl}</div>
                <div>&nbsp;&nbsp;<strong>activeHval:</strong> {this.props.activeHval}</div>
                <div>&nbsp;&nbsp;<strong>mode:</strong> {this.props.isModeScale ? 'scale' : 'set'}</div>

                <table>
                    <tbody>
                        <tr>
                            <td><strong>&nbsp;&nbsp;H1:</strong></td>
                            <td>{this.props.H1}</td>
                            <td><strong>H2:</strong></td>
                            <td>{this.props.H2}</td>
                        </tr>
                        <tr>
                            <td><strong>&nbsp;&nbsp;S1:</strong></td>
                            <td>{this.props.S1}</td>
                            <td><strong>S2:</strong></td>
                            <td>{this.props.S2}</td>
                        </tr>
                        <tr>
                            <td><strong>&nbsp;&nbsp;L1:</strong></td>
                            <td>{this.props.L1}</td>
                            <td><strong>L2:</strong></td>
                            <td>{this.props.L2}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

State.propTypes = {
    activehsl: PropTypes.string.isRequired,
    activeHval: PropTypes.number.isRequired,
    isModeScale: PropTypes.bool.isRequired,
    H1: PropTypes.number.isRequired,
    H2: PropTypes.number.isRequired,
    S1: PropTypes.number.isRequired,
    S2: PropTypes.number.isRequired,
    L1: PropTypes.number.isRequired,
    L2: PropTypes.number.isRequired,
}

export default State;
