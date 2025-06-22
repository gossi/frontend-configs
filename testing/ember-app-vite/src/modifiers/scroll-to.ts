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
