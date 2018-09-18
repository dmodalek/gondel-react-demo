import { startComponents } from '@gondel/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './components/awesome-component';
import App from './app.jsx';

import './mountains.css';

console.log('Starting components...');
startComponents();

ReactDOM.render(React.createElement(App, null), document.getElementById('react-root'));
