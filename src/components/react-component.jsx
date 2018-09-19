import { startComponents, stopComponents, getComponentByDomNode } from '@gondel/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './ui-component';
import './react-component.css';

export default class ReactComponent extends React.Component {
  componentDidMount() {
    console.log('React Component started');
    startComponents(this.gondelComponent);
    this.gondelComponent.addEventListener('gMouseOver', this.onUIMouseOver);
  }

  componentWillUnmount() {
    stopComponents(this.gondelComponent);
  }

  onUIMouseOver(e) {
    console.log('React: Mouseover received from UI');
    // console.log('React: Mouseover received from UI', e.data);
  }

  handleClick = () => {
    console.log('React: Button click');
    const gondelComponent = getComponentByDomNode(this.gondelComponent);
    gondelComponent.onReactButtonClick();
  };

  render() {
    return (
      <>
        <div
          data-g-name="UIComponent"
          className="m-ui-component m-ui-component--react"
          onClick={this.handleClick}
          ref={element => {
            this.gondelComponent = element;
          }}
        >
          <div className="m-ui-component__lines" />
          <span className="m-ui-component__gondel"> 🚠</span>
        </div>
      </>
    );
  }
}
