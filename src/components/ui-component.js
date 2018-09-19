import { Component, EventListener, GondelBaseComponent, triggerPublicEvent } from '@gondel/core';
import './ui-component.css';

@Component('UIComponent')
export default class UIComponent extends GondelBaseComponent {
  start() {
    console.log('🚡 UI: Component started...');
  }

  onReactButtonClick() {
    console.log('🚡 UI: Button clicked received from React');
  }

  @EventListener('mouseover')
  _handleMouseOver = event => {
    console.log('🚡 UI: Mouseover');
    triggerPublicEvent('gUIMouseOver', this);
  };
}
