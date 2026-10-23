import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';

import Hello from '#components/hello.gts';
import { setupRenderingTest } from '#tests/helpers.ts';

module('Unit | Component | <Hello>', (hooks) => {
  setupRenderingTest(hooks);

  test('Says hello to someone', async (assert) => {
    await render(<template><Hello @name="gossi" /></template>);

    assert.dom().containsText('Hello gossi');
  });
});
