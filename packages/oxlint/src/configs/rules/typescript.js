/**
 * Port of the `strict` and `stylistic` `typescript-eslint` rulesets, configured to the values
 * of `@gossi/config-eslint`. Rules without an oxlint equivalent are omitted; see the README for
 * the full list.
 */
export default {
  'default-param-last': 'error',
  'no-array-constructor': 'error',
  'no-empty-function': 'error',
  'no-loop-func': 'error',
  'no-shadow': [
    'error',
    { ignoreTypeValueShadow: true, ignoreFunctionTypeParameterNameValueShadow: true }
  ],
  // allows short-circuit idioms like `a && a()` and `a ? a() : b()`
  'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
  // allows placeholder args to still be defined for documentation or "for later" purposes
  'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  // oxlint handles TypeScript natively, the @typescript-eslint variant is not needed
  'no-use-before-define': 'error',
  'no-useless-constructor': 'error',
  'no-var': 'error',
  'prefer-const': 'error',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'typescript/adjacent-overload-signatures': 'error',
  // enforce the array type style
  'typescript/array-type': 'error',
  'typescript/ban-ts-comment': ['error', { minimumDescriptionLength: 10 }],
  'typescript/ban-tslint-comment': 'error',
  'typescript/class-literal-property-style': 'error',
  'typescript/consistent-generic-constructors': 'error',
  'typescript/consistent-indexed-object-style': 'error',
  'typescript/consistent-type-assertions': 'error',
  'typescript/consistent-type-definitions': 'error',
  // type imports are removed in builds
  'typescript/consistent-type-imports': 'error',
  // prefer inference, but it is recommended to declare return types around public API
  'typescript/explicit-function-return-type': 'off',
  // prefer inference, but it is recommended to declare return types around public API
  'typescript/explicit-module-boundary-types': 'off',
  'typescript/no-confusing-non-null-assertion': 'error',
  'typescript/no-duplicate-enum-values': 'error',
  'typescript/no-dynamic-delete': 'error',
  'typescript/no-empty-object-type': 'error',
  'typescript/no-explicit-any': 'error',
  'typescript/no-extra-non-null-assertion': 'error',
  'typescript/no-extraneous-class': 'error',
  'typescript/no-inferrable-types': 'error',
  'typescript/no-invalid-void-type': 'error',
  'typescript/no-misused-new': 'error',
  'typescript/no-namespace': 'error',
  'typescript/no-non-null-asserted-nullish-coalescing': 'error',
  'typescript/no-non-null-asserted-optional-chain': 'error',
  'typescript/no-non-null-assertion': 'error',
  'typescript/no-require-imports': 'error',
  'typescript/no-this-alias': 'error',
  'typescript/no-unnecessary-type-constraint': 'error',
  'typescript/no-unsafe-declaration-merging': 'error',
  'typescript/no-unsafe-function-type': 'error',
  'typescript/no-wrapper-object-types': 'error',
  'typescript/prefer-as-const': 'error',
  // enforce the use of for-of loop over the standard for loop where possible
  'typescript/prefer-for-of': 'error',
  'typescript/prefer-function-type': 'error',
  'typescript/prefer-literal-enum-member': 'error',
  'typescript/prefer-namespace-keyword': 'error',
  'typescript/triple-slash-reference': 'error',
  'typescript/unified-signatures': 'error'
};
