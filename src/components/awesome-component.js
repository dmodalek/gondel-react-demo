import { Component, EventListener, GondelBaseComponent, triggerPublicEvent } from '@gondel/core';
import './awesome-component.css';

@Component('AwesomeComponent')
export default class AwesomeComponent extends GondelBaseComponent {
  start() {
    this.callback = null;
    console.log('UI: Awesome Component started...');
    document.documentElement.addEventListener('gClicked', this.handleGlobalEvent);
  }

  myAwesomeFunction() {
    console.log('UI: Button clicked received from React');
  }

  notifyWhenClicked = fn => {
    this.callback = fn;
  };

  @EventListener('click')
  _handleClick = event => {
    console.log('UI: Gondel clicked in UI');

    triggerPublicEvent('gClicked', this);
  };
}
