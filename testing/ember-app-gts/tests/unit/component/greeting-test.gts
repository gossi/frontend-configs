import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import Greeting from 'ember-app-gts/components/greeting';

module('Rendering | <Button>', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders with defaults', async function (assert) {
    await render(<template><Greeting @hello="hi" @to="me"/></template>);

    assert.dom().hasText('hi to Me');
  });
});
