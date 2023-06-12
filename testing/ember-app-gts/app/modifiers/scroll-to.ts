import Modifier from 'ember-modifier';

type Positional = [number];
type Options = {
  relative?: boolean;
};

interface ScrollPositionSignature {
  Element: HTMLElement;
  Args: {
    Positional: Positional;
    Named: Options;
  };
}

export default class ScrollPositionModifier extends Modifier<ScrollPositionSignature> {
  modify(element: HTMLElement, [scrollPosition]: Positional, { relative }: Options) {
    if (relative) {
      element.scrollTop += scrollPosition;
    } else {
      element.scrollTop = scrollPosition;
    }
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'scroll-to': typeof ScrollPositionModifier;
  }
}
