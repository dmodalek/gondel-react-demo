import { Component, startComponents, stopComponents, getComponentByDomNode } from '@gondel/core';
import { GondelReactComponent } from '@gondel/plugin-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './react-widget.css';

@Component('ReactWidget')
export class ReactWidget extends GondelReactComponent {
  render(config) {
    return (
      <p className="m-react-widget">
        <span className="m-react-widget__icon">{config.icon}</span>
      </p>
    );
  }
}
