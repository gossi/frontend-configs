import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';

import Hello from 'ember-app-vite/components/hello';
import { setupRenderingTest } from 'ember-app-vite/tests/helpers';

module('Unit | Component | <Hello>', (hooks) => {
  setupRenderingTest(hooks);

  test('Says hello to someone', async (assert) => {
    await render(<template><Hello @name="gossi" /></template>);

    assert.dom().containsText('Hello gossi');
  });
});
