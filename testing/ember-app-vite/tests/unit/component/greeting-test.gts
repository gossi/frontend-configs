import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';

import Greeting from '#components/greeting.gts';
import { setupRenderingTest } from '#tests/helpers.ts';

module('Rendering | <Greeting>', (hooks) => {
  setupRenderingTest(hooks);

  test('it renders with defaults', async (assert) => {
    await render(<template><Greeting @hello="hi" @to="me" /></template>);

    assert.dom().hasText('hi to Me');
  });
});
