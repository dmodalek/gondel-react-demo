import { startComponents } from '@gondel/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './mountains.css';

// Import UI Component JavaScript
import './components/ui-component';

// Import React Component JavaScript
import ReactComponent from './components/react-component.jsx';

// Render the React Component
ReactDOM.render(React.createElement(ReactComponent, null), document.getElementById('react-component'));
