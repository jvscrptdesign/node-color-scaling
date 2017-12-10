import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NodeColors from './NodeColorMain_';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <NodeColors />, 
    document.getElementById('root')
);
registerServiceWorker();
