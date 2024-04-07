declare module '@storybook/ember' {
  import type {
    AnnotatedStoryFn,
    Args,
    ComponentAnnotations,
    StoryAnnotations,
    WebRenderer
  } from '@storybook/types';

  export type { Args, ArgTypes, Parameters, StrictArgs } from '@storybook/types';
  export type { EmberRenderer };

  interface OptionsArgs {
    template: any;
    context?: any;
    element?: any;
  }

  interface EmberRenderer extends WebRenderer {
    component: any;
    storyResult: OptionsArgs;
  }

  /**
   * Metadata to configure the stories for a component.
   *
   * @see [Default export](https://storybook.js.org/docs/formats/component-story-format/#default-export)
   */
  export type Meta<TArgs = Args> = ComponentAnnotations<EmberRenderer, TArgs>;

  /**
   * Story function that represents a CSFv2 component example.
   *
   * @see [Named Story exports](https://storybook.js.org/docs/formats/component-story-format/#named-story-exports)
   */
  export type StoryFn<TArgs = Args> = AnnotatedStoryFn<EmberRenderer, TArgs>;

  /**
   * Story object that represents a CSFv3 component example.
   *
   * @see [Named Story exports](https://storybook.js.org/docs/formats/component-story-format/#named-story-exports)
   */
  export type StoryObj<TArgs = Args> = StoryAnnotations<EmberRenderer, TArgs>;
}
