import { startComponents, stopComponents, getComponentByDomNode } from '@gondel/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import './awesome-component';
// import { awesome-component } from './awesome-component.css';

export default class AwesomeComponentReact extends React.Component {
  componentDidMount() {
    console.log('React: Awesome React Component started');
    startComponents(this.gondelComponent);
    this.gondelComponent.addEventListener('gClicked', this.subscribed);
  }

  componentWillUnmount() {
    stopComponents(this.gondelComponent);
  }

  subscribed(e) {
    console.log('...React: Button clicked received from UI', e.data);
  }

  handleClick = () => {
    console.log('React: Button clicked in React');
    const gondelComponent = getComponentByDomNode(this.gondelComponent);
    gondelComponent.myAwesomeFunction();
  };

  render() {
    return (
      <>
        <span
          className="m-awesome-component"
          ref={element => {
            this.gondelComponent = element;
          }}
          data-g-name="AwesomeComponent"
        >
          🚠
        </span>
        <button onClick={this.handleClick}>Woop woop!</button>
      </>
    );
  }
}
