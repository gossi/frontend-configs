import { modifier } from 'ember-modifier';

interface ResizeObserverSignature {
  Element: HTMLElement;
  Args: {
    Positional: [callback: (entries: ResizeObserverEntry[], observer: ResizeObserver) => void];
    Named?: ResizeObserverOptions;
  };
}

export default modifier<ResizeObserverSignature>((element, [callback], options) => {
  const observer = new ResizeObserver(callback);

  observer.observe(element, options);

  return () => {
    observer.disconnect();
  };
});
