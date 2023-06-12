import { modifier } from 'ember-modifier';

interface ResizeObserverSignature {
  Element: HTMLElement;
  Args: {
    Positional: [callback: (entries: ResizeObserverEntry[], observer: ResizeObserver) => void];
    Named?: ResizeObserverOptions;
  };
}

const resizeObserver = modifier<ResizeObserverSignature>((element, [callback], options) => {
  const observer = new ResizeObserver(callback);

  observer.observe(element, options);

  return () => {
    observer.disconnect();
  };
});

export default resizeObserver;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'resize-observer': typeof resizeObserver;
  }
}
