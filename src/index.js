import { startComponents } from '@gondel/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './mountains.css';

// Import UI Component JavaScript
import './components/ui-component';

// Import React Component JavaScript
import ReactComponent from './components/react-component.jsx';

// Render the React Component
const domNode = document.getElementById('react-component');
domNode && ReactDOM.render(React.createElement(ReactComponent, null), document.getElementById('react-component'));

// Import React Widget JavaScript
import ReactWidget from './components/react-widget.jsx';
