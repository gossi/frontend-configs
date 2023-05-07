import { modifier } from 'ember-modifier';

interface OnSignature {
  Element: HTMLElement;
  Args: {
    Positional: [keyof ElementEventMap, () => void];
    Named?: AddEventListenerOptions;
  };
}

export default modifier<OnSignature>((element, [eventName, handler], options) => {
  element.addEventListener(eventName, handler, options);

  return () => {
    element.removeEventListener(eventName, handler);
  };
});
