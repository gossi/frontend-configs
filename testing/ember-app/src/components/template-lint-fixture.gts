import type { TOC } from '@ember/component/template-only';

/**
 * This component only exists to keep template linting honest in these test packages.
 *
 * There are no `.hbs` files here, so templates are linted entirely through the
 * `gossi/ember/templates` config. The directive below makes the lint fail whenever that
 * stops working:
 *
 * - the rule isn't registered: `Definition for rule ... was not found`
 * - the rule stops reporting: `reportUnusedDisableDirectives` is set to `error`
 */
interface TemplateLintFixtureSignature {
  Args: {
    label: string;
  };
}

const TemplateLintFixture: TOC<TemplateLintFixtureSignature> = <template>
  {{! eslint-disable-next-line ember/template-no-inline-styles }}
  <div style="color: red">{{@label}}</div>
</template>;

export default TemplateLintFixture;
