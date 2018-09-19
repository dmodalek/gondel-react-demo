import { Component, EventListener, GondelBaseComponent, triggerPublicEvent } from '@gondel/core';
import './ui-component.css';

@Component('UIComponent')
export default class UIComponent extends GondelBaseComponent {
  start() {
    this.callback = null;
    console.log('UI: Component started...');
    document.documentElement.addEventListener('gMouseOver', this.handleGlobalEvent);
  }

  onReactButtonClick() {
    console.log('UI: Button clicked received from React');
  }

  @EventListener('mouseover')
  _handleClick = event => {
    console.log('UI: mouseover');

    triggerPublicEvent('gMouseOver', this);
  };
}
