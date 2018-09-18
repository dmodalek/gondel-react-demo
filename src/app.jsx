import { startComponents, stopComponents, getComponentByDomNode } from '@gondel/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import AwesomeComponentReact from './components/awesome-component-react.jsx';

export default class Button extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AwesomeComponentReact />
      </React.Fragment>
    );
  }
}
