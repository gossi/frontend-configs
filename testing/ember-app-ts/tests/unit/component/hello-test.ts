import { type RenderingTestContext, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

module('Unit | Component | <Hello>', function (hooks) {
  setupRenderingTest(hooks);

  test('Says hello to someone', async function (this: RenderingTestContext, assert) {
    await render(hbs`
      <Hello @name="gossi" />
    `);

    assert.dom().containsText('Hello gossi');
  });
});
