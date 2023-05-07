import { modifier } from 'ember-modifier';

interface OnSignature {
  Element: HTMLElement;
  Args: {
    Positional: [keyof ElementEventMap, () => void];
    Named?: AddEventListenerOptions;
  };
}

const on = modifier<OnSignature>((element, [eventName, handler], options) => {
  element.addEventListener(eventName, handler, options);

  return () => {
    element.removeEventListener(eventName, handler);
  };
});

export default on;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    on: typeof on;
  }
}
