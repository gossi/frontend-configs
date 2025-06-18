import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import Greeting from 'ember-app-classic/components/greeting';

module('Rendering | <Button>', (hooks) => {
  setupRenderingTest(hooks);

  test('it renders with defaults', async (assert) => {
    await render(<template><Greeting @hello="hi" @to="me" /></template>);

    assert.dom().hasText('hi to Me');
  });
});
