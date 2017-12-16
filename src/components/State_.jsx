import React, { Component } from 'react';
import PropTypes from 'prop-types';

class State extends Component {
    render() {
        let {activehsl, activeHval, isModeScale, H1, H2, S1, S2, L1, L2} = this.props;

        return (
            <div>
                <div><u><strong>state:</strong></u></div>
                <div>&nbsp;&nbsp;<strong>activeHSL:</strong> {activehsl}</div>
                <div>&nbsp;&nbsp;<strong>activeHval:</strong> {activeHval}</div>
                <div>&nbsp;&nbsp;<strong>mode:</strong> {isModeScale ? 'scale' : 'set'}</div>

                <table>
                    <tbody>
                        <tr>
                            <td><strong>&nbsp;&nbsp;H1:</strong></td>
                            <td>{H1}</td>
                            <td><strong>H2:</strong></td>
                            <td>{H2}</td>
                        </tr>
                        <tr>
                            <td><strong>&nbsp;&nbsp;S1:</strong></td>
                            <td>{S1}</td>
                            <td><strong>S2:</strong></td>
                            <td>{S2}</td>
                        </tr>
                        <tr>
                            <td><strong>&nbsp;&nbsp;L1:</strong></td>
                            <td>{L1}</td>
                            <td><strong>L2:</strong></td>
                            <td>{L2}</td>
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
