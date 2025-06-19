import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';

import Greeting from 'ember-app-vite/components/greeting';
import { setupRenderingTest } from 'ember-app-vite/tests/helpers';

module('Rendering | <Greeting>', (hooks) => {
  setupRenderingTest(hooks);

  test('it renders with defaults', async (assert) => {
    await render(<template><Greeting @hello="hi" @to="me" /></template>);

    assert.dom().hasText('hi to Me');
  });
});
