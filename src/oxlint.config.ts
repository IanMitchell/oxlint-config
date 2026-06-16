import { defineConfig, type OxlintConfig } from "oxlint";

export const config: OxlintConfig = defineConfig({
	plugins: [
		"eslint",
		"react",
		"unicorn",
		"typescript",
		"oxc",
		"import",
		"jsdoc",
		"vitest",
		"jsx-a11y",
		"nextjs",
		"react-perf",
		"promise",
		"node",
	],
	options: {
		typeAware: true,
		typeCheck: true,
	},
	rules: {
		// Trust the dev. Many times you want to read but not set.
		"accessor-pairs": "off",
		"typescript/adjacent-overload-signatures": "error",
		"jsx-a11y/alt-text": "error",
		"promise/always-return": "error",
		"jsx-a11y/anchor-ambiguous-text": "error",
		"jsx-a11y/anchor-has-content": "error",
		"jsx-a11y/anchor-is-valid": "error",
		"oxc/approx-constant": "error",
		"jsx-a11y/aria-activedescendant-has-tabindex": "error",
		"jsx-a11y/aria-props": "error",
		"jsx-a11y/aria-proptypes": "error",
		"jsx-a11y/aria-role": "error",
		"jsx-a11y/aria-unsupported-elements": "error",
		"array-callback-return": ["error", { checkForEach: true, allowImplicit: true }],
		"typescript/array-type": ["error", { default: "array-simple" }],
		"arrow-body-style": "error",
		"jsx-a11y/autocomplete-valid": "error",
		// Too restrictive, largely covered by other rules
		"promise/avoid-new": "off",
		"typescript/await-thenable": "error",
		"oxc/bad-array-method-on-arguments": "error",
		"oxc/bad-bitwise-operator": "error",
		"oxc/bad-char-at-comparison": "error",
		"oxc/bad-comparison-sequence": "error",
		"oxc/bad-min-max-func": "error",
		"oxc/bad-object-literal-comparison": "error",
		"oxc/bad-replace-all-arg": "error",
		"typescript/ban-ts-comment": [
			"error",
			{
				"ts-expect-error": "allow-with-description",
				"ts-ignore": true,
				"ts-nocheck": "allow-with-description",
				"ts-check": false,
				"minimumDescriptionLength": 3,
			},
		],
		// We don't use tslint
		"typescript/ban-tslint-comment": "off",
		// Deprecated
		"typescript/ban-types": "off",
		"block-scoped-var": "error",
		"oxc/branches-sharing-code": "error",
		"react/button-has-type": "error",
		// We use TypeScript
		"node/callback-return": "off",
		// While generally preferable, no need to error on this
		"capitalized-comments": "off",
		// Trust the developer
		"unicorn/catch-error-name": "off",
		"promise/catch-or-return": "error",
		"jsdoc/check-access": "error",
		"jsdoc/check-property-names": "error",
		"jsdoc/check-tag-names": ["error", { typed: true }],
		"react/checked-requires-onchange-or-readonly": "error",
		"typescript/class-literal-property-style": ["error", "fields"],
		"class-methods-use-this": "error",
		"jsx-a11y/click-events-have-key-events": "error",
		// We may want to set this up for Agents
		"complexity": "off",
		// We don't use assert
		"unicorn/consistent-assert": "off",
		"unicorn/consistent-date-clone": "error",
		"vitest/consistent-each-for": [
			"error",
			{
				describe: "each",
				it: "each",
				suite: "each",
				test: "each",
			},
		],
		"unicorn/consistent-empty-array-spread": "error",
		"unicorn/consistent-existence-index-check": "error",
		"unicorn/consistent-function-scoping": "error",
		"typescript/consistent-generic-constructors": "error",
		"typescript/consistent-indexed-object-style": ["error", "record"],
		"typescript/consistent-return": "error",
		"unicorn/consistent-template-literal-escape": "error",
		"vitest/consistent-test-filename": [
			"error",
			{ allTestPattern: "tests", pattern: ".*\\.test\\.tsx?$" },
		],
		"vitest/consistent-test-it": ["error", { fn: "test", withinDescribe: "test" }],
		"typescript/consistent-type-assertions": ["error", { assertionStyle: "never" }],
		"typescript/consistent-type-definitions": ["error", "interface"],
		"typescript/consistent-type-exports": "error",
		"typescript/consistent-type-imports": "error",
		"import/consistent-type-specifier-style": ["error", "prefer-top-level"],
		"vitest/consistent-vitest-vi": ["error", { fn: "vitest" }],
		"oxc/const-comparisons": "error",
		// Handled by TypeScript
		"constructor-super": "off",
		"jsx-a11y/control-has-associated-label": "error",
		"curly": "error",
		"unicorn/custom-error-definition": "error",
		"import/default": "error",
		// I believe TypeScript handles this, but we may want to enable if not
		"default-case": "off",
		"default-case-last": "error",
		"default-param-last": "error",
		"react/display-name": "error",
		"typescript/dot-notation": "error",
		"oxc/double-comparisons": "error",
		// Handled by oxfmt
		"unicorn/empty-brace-spaces": "off",
		"jsdoc/empty-tags": "error",
		"eqeqeq": ["error", "always", { null: "ignore" }],
		"oxc/erasing-op": "error",
		"unicorn/error-message": "error",
		"unicorn/escape-case": "error",
		"react/exhaustive-deps": "error",
		"vitest/expect-expect": "error",
		// We would like this for exported functions only
		"typescript/explicit-function-return-type": "off",
		"unicorn/explicit-length-check": "error",
		// We prefer native private fields
		"typescript/explicit-member-accessibility": "off",
		"typescript/explicit-module-boundary-types": "error",
		"import/export": "error",
		// Trust the developer
		"import/exports-last": "off",
		"import/extensions": ["error", "always", { ignorePackages: true }],
		"unicorn/filename-case": "error",
		"import/first": "error",
		"for-direction": "error",
		// We use props
		"react/forbid-component-props": "off",
		// Project dependent
		"react/forbid-dom-props": "off",
		// Project dependent
		"react/forbid-elements": "off",
		"react/forward-ref-uses-ref": "error",
		// Very unlikely in modern TS
		"func-name-matching": "off",
		"func-names": "error",
		"func-style": [
			"error",
			"declaration",
			{ allowArrowFunctions: true, overrides: { namedExports: "declaration" } },
		],
		// Handled by TypeScript
		"getter-return": "off",
		// We use ESM
		"node/global-require": "off",
		"nextjs/google-font-display": "error",
		"nextjs/google-font-preconnect": "error",
		// Trust the developer
		"import/group-exports": "off",
		"grouped-accessor-pairs": "error",
		"guard-for-in": "error",
		// We use modern async APIs
		"node/handle-callback-err": "off",
		"jsx-a11y/heading-has-content": "error",
		"vitest/hoisted-apis-on-top": "error",
		"react/hook-use-state": "error",
		"jsx-a11y/html-has-lang": "error",
		// A little too fiddly, gets in the way.
		"id-length": "off",
		// Trust the developer
		"id-match": "off",
		"jsx-a11y/iframe-has-title": "error",
		"react/iframe-missing-sandbox": "error",
		"jsx-a11y/img-redundant-alt": ["error", { components: ["img", "Image"] }],
		"jsdoc/implements-on-classes": "error",
		// Trust the developer
		"unicorn/import-style": "off",
		// A little too fiddly, gets in the way.
		"init-declarations": "off",
		"nextjs/inline-script-id": "error",
		"jsx-a11y/interactive-supports-focus": "error",
		// We probably want to enable this
		"react/jsx-boolean-value": "off",
		"react/jsx-curly-brace-presence": ["error", { propElementValues: "always" }],
		// Handled by TypeScript
		"react/jsx-filename-extension": "off",
		"react/jsx-fragments": ["error", "element"],
		"react/jsx-handler-names": "error",
		"react/jsx-key": "error",
		// We may want to enable this for Agents
		"react/jsx-max-depth": "off",
		"react/jsx-no-comment-textnodes": "error",
		"react/jsx-no-constructed-context-values": "error",
		"react/jsx-no-duplicate-props": "error",
		// Handled by React Compiler
		"react-perf/jsx-no-jsx-as-prop": "off",
		// Unnecessary
		"react/jsx-no-literals": "off",
		"react-perf/jsx-no-new-array-as-prop": "error",
		// Handled by React Compiler
		"react-perf/jsx-no-new-function-as-prop": "off",
		// Handled by React Compiler
		"react-perf/jsx-no-new-object-as-prop": "off",
		"react/jsx-no-script-url": "error",
		"react/jsx-no-target-blank": "error",
		// Handled by TypeScript
		"react/jsx-no-undef": "off",
		"react/jsx-no-useless-fragment": "error",
		"react/jsx-pascal-case": "error",
		"react/jsx-props-no-spread-multi": "error",
		// Covered by TypeScript and too restrictive with libraries
		"react/jsx-props-no-spreading": "off",
		"jsx-a11y/label-has-associated-control": "error",
		"jsx-a11y/lang": "error",
		"logical-assignment-operators": ["error", "always", { enforceForIfStatements: true }],
		// We may want to set this up for Agents
		"max-classes-per-file": "off",
		// We may want to turn this on for Agents
		"import/max-dependencies": "off",
		// We may want to set this up for Agents
		"max-depth": "off",
		// Trust the developer
		"vitest/max-expects": "off",
		// We may want to set this up for Agents
		"max-lines": "off",
		// We may want to set this up for Agents
		"max-lines-per-function": "off",
		// We may want to set this up for Agents
		"max-nested-callbacks": "off",
		// Trust the developer
		"vitest/max-nested-describe": "off",
		// We may want to set this up for Agents
		"max-params": "off",
		// We may want to set this up for Agents
		"max-statements": "off",
		"jsx-a11y/media-has-caption": "error",
		"typescript/method-signature-style": ["error", "property"],
		"oxc/misrefactored-assign-op": "error",
		"oxc/missing-throw": "error",
		"jsx-a11y/mouse-events-have-key-events": "error",
		// Handled by TypeScropt
		"import/named": "off",
		// Handled by TypeScript
		"import/namespace": "off",
		"new-cap": [
			"error",
			{ newIsCap: true, capIsNew: true, properties: true, capIsNewExceptions: ["TaggedError"] },
		],
		"unicorn/new-for-builtins": "error",
		"import/newline-after-import": "error",
		"nextjs/next-script-for-ga": "error",
		"import/no-absolute-path": "error",
		"unicorn/no-abusive-eslint-disable": "error",
		// This situation is extremely uncommon
		"jsx-a11y/no-access-key": "off",
		"unicorn/no-accessor-recursion": "error",
		"oxc/no-accumulating-spread": "error",
		"no-alert": "error",
		// We prefer some of the alias method names
		"vitest/no-alias-methods": "off",
		"import/no-amd": "error",
		"import/no-anonymous-default-export": "error",
		// Prefer import/no-anonymous-default-export
		"unicorn/no-anonymous-default-export": "off",
		"jsx-a11y/no-aria-hidden-on-focusable": "error",
		"unicorn/no-array-callback-reference": "error",
		"no-array-constructor": "error",
		"typescript/no-array-delete": "error",
		"unicorn/no-array-fill-with-reference-type": "error",
		// Trust the developer
		"unicorn/no-array-for-each": "off",
		"react/no-array-index-key": "error",
		"unicorn/no-array-method-this-argument": "error",
		"unicorn/no-array-reduce": "error",
		"unicorn/no-array-reverse": "error",
		"unicorn/no-array-sort": "error",
		"nextjs/no-assign-module-variable": "error",
		// Meant for older codebases
		"oxc/no-async-await": "off",
		"nextjs/no-async-client-component": "error",
		// We do not use Hono
		"oxc/no-async-endpoint-handlers": "off",
		"no-async-promise-executor": "error",
		// Autofocus should be used appropriately, not never used
		"jsx-a11y/no-autofocus": "off",
		"unicorn/no-await-expression-member": "error",
		"no-await-in-loop": "error",
		"unicorn/no-await-in-promise-methods": "error",
		"oxc/no-barrel-file": "error",
		"typescript/no-base-to-string": "error",
		// Pages rule
		"nextjs/no-before-interactive-script-outside-document": "off",
		// Trust the developer
		"no-bitwise": "off",
		"promise/no-callback-in-promise": "error",
		// Not necessary with strict mode
		"no-caller": "off",
		"no-case-declarations": "error",
		"react/no-children-prop": "error",
		"no-class-assign": "error",
		"react/no-clone-element": "error",
		"vitest/no-commented-out-tests": "error",
		"import/no-commonjs": "error",
		"no-compare-neg-zero": "error",
		"no-cond-assign": "error",
		"vitest/no-conditional-expect": "error",
		"vitest/no-conditional-in-test": "error",
		"vitest/no-conditional-tests": "error",
		"typescript/no-confusing-non-null-assertion": "error",
		"typescript/no-confusing-void-expression": "error",
		"no-console": "error",
		// Trust the developer
		"unicorn/no-console-spaces": "off",
		"no-const-assign": "error",
		"oxc/no-const-enum": "error",
		"no-constant-binary-expression": "error",
		"no-constant-condition": "error",
		"no-constructor-return": "error",
		// Trust the developer
		"no-continue": "off",
		"no-control-regex": "error",
		"nextjs/no-css-tags": "error",
		// Trust the developer
		"import/no-cycle": "off",
		"react/no-danger": "error",
		"react/no-danger-with-children": "error",
		"no-debugger": "error",
		"import/no-default-export": "error",
		"jsdoc/no-defaults": "error",
		"no-delete-var": "error",
		"typescript/no-deprecated": "error",
		// We do not use classes
		"react/no-did-mount-set-state": "off",
		// We do not use classes
		"react/no-did-update-set-state": "off",
		// We do not use classes
		"react/no-direct-mutation-state": "off",
		"vitest/no-disabled-tests": "error",
		// This situation is extremely uncommon
		"jsx-a11y/no-distracting-elements": "off",
		"no-div-regex": "error",
		"unicorn/no-document-cookie": "error",
		// Pages rule
		"nextjs/no-document-import-in-page": "off",
		// Handled by TypeScript
		"no-dupe-class-members": "off",
		"no-dupe-else-if": "error",
		// Handled by TypeScript
		"no-dupe-keys": "off",
		"no-duplicate-case": "error",
		"typescript/no-duplicate-enum-values": "error",
		// Pages rule
		"nextjs/no-duplicate-head": "off",
		"vitest/no-duplicate-hooks": "error",
		// Handled by import/no-duplicates
		"no-duplicate-imports": "off",
		"typescript/no-duplicate-type-constituents": "error",
		"import/no-duplicates": ["error"],
		"typescript/no-dynamic-delete": "error",
		"import/no-dynamic-require": "error",
		"no-else-return": "error",
		"no-empty": "error",
		"no-empty-character-class": "error",
		// Trust the developer
		"unicorn/no-empty-file": "off",
		"no-empty-function": "error",
		"typescript/no-empty-interface": "error",
		"import/no-empty-named-blocks": "error",
		"typescript/no-empty-object-type": "error",
		"no-empty-pattern": "error",
		"no-empty-static-block": "error",
		// Trust the developer
		"no-eq-null": "off",
		"no-eval": "error",
		"no-ex-assign": "error",
		"typescript/no-explicit-any": "error",
		// We use ESM
		"node/no-exports-assign": "off",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-boolean-cast": "error",
		"no-extra-label": "error",
		"typescript/no-extra-non-null-assertion": "error",
		"typescript/no-extraneous-class": "error",
		"no-fallthrough": ["error", { allowEmptyCase: true }],
		// We use React 19
		"react/no-find-dom-node": "off",
		"typescript/no-floating-promises": "error",
		"vitest/no-focused-tests": "error",
		"typescript/no-for-in-array": "error",
		// Handled by TypeScript
		"no-func-assign": "off",
		"no-global-assign": "error",
		"nextjs/no-head-element": "error",
		// Pages rule
		"nextjs/no-head-import-in-document": "off",
		"unicorn/no-hex-escape": "error",
		// Trust the developer
		"vitest/no-hooks": "off",
		"nextjs/no-html-link-for-pages": "error",
		"vitest/no-identical-title": "error",
		"nextjs/no-img-element": "error",
		"unicorn/no-immediate-mutation": "error",
		"no-implicit-coercion": "error",
		// We write one-off scripts more than we write browser scripts
		"no-implicit-globals": "off",
		// Prefer TypeScript rule
		"no-implied-eval": "off",
		"typescript/no-implied-eval": "error",
		"no-import-assign": "error",
		"vitest/no-import-node-test": "error",
		"typescript/no-import-type-side-effects": "error",
		// We don't configure for globals
		"vitest/no-importing-vitest-globals": "off",
		"typescript/no-inferrable-types": "error",
		// Trust the dev
		"no-inline-comments": "off",
		"no-inner-declarations": "error",
		"unicorn/no-instanceof-array": "error",
		"unicorn/no-instanceof-builtins": ["error", { useErrorIsError: true }],
		"jsx-a11y/no-interactive-element-to-noninteractive-role": "error",
		"vitest/no-interpolation-in-snapshots": "error",
		"unicorn/no-invalid-fetch-options": "error",
		"no-invalid-regexp": "error",
		"unicorn/no-invalid-remove-event-listener": "error",
		"typescript/no-invalid-void-type": "error",
		"no-irregular-whitespace": "error",
		// We do not use classes
		"react/no-is-mounted": "off",
		// Incredibly unlikely
		"no-iterator": "off",
		"no-label-var": "error",
		"no-labels": "error",
		"vitest/no-large-snapshots": "error",
		"unicorn/no-length-as-slice-end": "error",
		"no-lone-blocks": "error",
		"no-lonely-if": "error",
		"unicorn/no-lonely-if": "error",
		"no-loop-func": "error",
		"no-loss-of-precision": "error",
		"unicorn/no-magic-array-flat-depth": "error",
		// A little too fiddly, gets in the way.
		"no-magic-numbers": "off",
		"oxc/no-map-spread": "error",
		"typescript/no-meaningless-void-operator": "error",
		"no-misleading-character-class": "error",
		"typescript/no-misused-new": "error",
		"typescript/no-misused-promises": [
			"error",
			{
				checksVoidReturn: {
					attributes: false,
				},
			},
		],
		"typescript/no-misused-spread": "error",
		"typescript/no-mixed-enums": "error",
		// We disable mocks
		"vitest/no-mocks-import": "off",
		"no-multi-assign": "error",
		// We may want this for Agents
		"react/no-multi-comp": "off",
		"no-multi-str": "error",
		"promise/no-multiple-resolved": "error",
		"import/no-mutable-exports": "error",
		"import/no-named-as-default": "error",
		"import/no-named-as-default-member": "error",
		"import/no-named-default": "error",
		// We prefer named exports
		"import/no-named-export": "off",
		"import/no-namespace": "error",
		"react/no-namespace": "error",
		"typescript/no-namespace": "error",
		// A little too fiddly, gets in the way.
		"no-negated-condition": "off",
		// Too fiddly
		"unicorn/no-negated-condition": "off",
		"unicorn/no-negation-in-equality-check": "error",
		"no-nested-ternary": "error",
		// Prefer the stricter `no-nested-ternary` rule
		"unicorn/no-nested-ternary": "off",
		"promise/no-nesting": "error",
		"no-new": "error",
		"unicorn/no-new-array": "error",
		"unicorn/no-new-buffer": "error",
		"no-new-func": "error",
		// Handled by TypeScript
		"no-new-native-nonconstructor": "off",
		// We use ESM
		"node/no-new-require": "off",
		"promise/no-new-statics": "error",
		"no-new-wrappers": "error",
		// We need nodejs core libs
		"import/no-nodejs-modules": "off",
		"typescript/no-non-null-asserted-nullish-coalescing": "error",
		"typescript/no-non-null-asserted-optional-chain": "error",
		"typescript/no-non-null-assertion": "error",
		"jsx-a11y/no-noninteractive-element-interactions": "error",
		"jsx-a11y/no-noninteractive-element-to-interactive-role": "error",
		"jsx-a11y/no-noninteractive-tabindex": "error",
		// Incredibly unlikely
		"no-nonoctal-decimal-escape": "off",
		// Disagree with the premise
		"unicorn/no-null": "off",
		// Handled by TypeScript
		"no-obj-calls": "off",
		"unicorn/no-object-as-default-parameter": "error",
		"no-object-constructor": "error",
		"react/no-object-type-as-default-prop": "error",
		// Meant for older codebases
		"oxc/no-optional-chaining": "off",
		// Pages rule
		"nextjs/no-page-custom-font": "off",
		"no-param-reassign": "error",
		// We use ESM
		"node/no-path-concat": "off",
		// Our formatter mandates semicolons
		"no-plusplus": "off",
		"node/no-process-env": "error",
		// Trust the developer
		"unicorn/no-process-exit": "off",
		"no-promise-executor-return": "error",
		"promise/no-promise-in-callback": "error",
		"no-proto": "error",
		"no-prototype-builtins": "error",
		"react/no-react-children": "error",
		"no-redeclare": "error",
		"jsx-a11y/no-redundant-roles": "error",
		// We do not use classes
		"react/no-redundant-should-component-update": "off",
		"typescript/no-redundant-type-constituents": "error",
		"no-regex-spaces": "error",
		// Trust the developer
		"import/no-relative-parent-imports": "off",
		// We use React 19
		"react/no-render-return-value": "off",
		"typescript/no-require-imports": "error",
		// Meant for older codebases
		"oxc/no-rest-spread-properties": "off",
		// Project dependent
		"no-restricted-exports": "off",
		// Not necessary
		"no-restricted-globals": "off",
		// This is a setting that should be enabled project by project
		"no-restricted-imports": "off",
		// Project dependent
		"vitest/no-restricted-matchers": "off",
		// Project dependent
		"no-restricted-properties": "off",
		// Project dependent
		"typescript/no-restricted-types": "off",
		// Project dependent
		"vitest/no-restricted-vi-methods": "off",
		"no-return-assign": "error",
		"promise/no-return-in-finally": "error",
		"promise/no-return-wrap": "error",
		"nextjs/no-script-component-in-head": "error",
		"no-script-url": "error",
		"no-self-assign": "error",
		"no-self-compare": "error",
		"import/no-self-import": "error",
		"no-sequences": "error",
		// We do not use classes
		"react/no-set-state": "off",
		// Handled by TypeScript
		"no-setter-return": "off",
		"no-shadow": "error",
		"no-shadow-restricted-names": "error",
		"unicorn/no-single-promise-in-promise-methods": "error",
		"no-sparse-arrays": "error",
		"vitest/no-standalone-expect": "error",
		"jsx-a11y/no-static-element-interactions": "error",
		"unicorn/no-static-only-class": "error",
		// We use React 19
		"react/no-string-refs": "off",
		// Pages rule
		"nextjs/no-styled-jsx-in-document": "off",
		"nextjs/no-sync-scripts": "error",
		"no-template-curly-in-string": "error",
		// Trust the developer
		"no-ternary": "off",
		"vitest/no-test-prefixes": "error",
		"vitest/no-test-return-statement": "error",
		"unicorn/no-thenable": "error",
		"typescript/no-this-alias": "error",
		// Prefer the `typescript/no-this-alias` rule
		"unicorn/no-this-assignment": "off",
		// Handled by TypeScript
		"no-this-before-super": "off",
		"oxc/no-this-in-exported-function": "error",
		"react/no-this-in-sfc": "error",
		// Deprecated
		"no-throw-literal": "off",
		"nextjs/no-title-in-document-head": "error",
		"unicorn/no-typeof-undefined": "error",
		// Pages rule
		"nextjs/no-typos": "off",
		// Breaks lifting side effect imports
		"import/no-unassigned-import": "off",
		"no-unassigned-vars": "error",
		// Handled by TypeScript
		"no-undef": "off",
		// Prefer no-void
		"no-undefined": "off",
		// Trust the developer
		"no-underscore-dangle": "off",
		"react/no-unescaped-entities": "error",
		"no-unexpected-multiline": "error",
		"react/no-unknown-property": ["error", { requireDataLowercase: true }],
		"no-unmodified-loop-condition": "error",
		"unicorn/no-unnecessary-array-flat-depth": "error",
		"unicorn/no-unnecessary-array-splice-count": "error",
		"unicorn/no-unnecessary-await": "error",
		"typescript/no-unnecessary-boolean-literal-compare": "error",
		"typescript/no-unnecessary-condition": "error",
		// Makes code less readable
		"typescript/no-unnecessary-parameter-property-assignment": "off",
		"typescript/no-unnecessary-qualifier": "error",
		"unicorn/no-unnecessary-slice-end": "error",
		"typescript/no-unnecessary-template-expression": "error",
		"typescript/no-unnecessary-type-arguments": "error",
		"typescript/no-unnecessary-type-assertion": "error",
		"typescript/no-unnecessary-type-constraint": "error",
		"typescript/no-unnecessary-type-conversion": "error",
		"typescript/no-unnecessary-type-parameters": "error",
		"vitest/no-unneeded-async-expect-function": "error",
		"no-unneeded-ternary": ["error", { defaultAssignment: false }],
		"no-unreachable": "error",
		"unicorn/no-unreadable-array-destructuring": "error",
		"unicorn/no-unreadable-iife": "error",
		// We do not use classes
		"react/no-unsafe": "off",
		"typescript/no-unsafe-argument": "error",
		"typescript/no-unsafe-assignment": "error",
		"typescript/no-unsafe-call": "error",
		"typescript/no-unsafe-declaration-merging": "error",
		"typescript/no-unsafe-enum-comparison": "error",
		"no-unsafe-finally": "error",
		"typescript/no-unsafe-function-type": "error",
		"typescript/no-unsafe-member-access": "error",
		"no-unsafe-negation": "error",
		"no-unsafe-optional-chaining": ["error", { disallowArithmeticOperators: true }],
		"typescript/no-unsafe-return": "error",
		"typescript/no-unsafe-type-assertion": "error",
		"typescript/no-unsafe-unary-minus": "error",
		"react/no-unstable-nested-components": "error",
		"no-unused-expressions": "error",
		"no-unused-labels": "error",
		"no-unused-private-class-members": "error",
		"no-unused-vars": "error",
		"nextjs/no-unwanted-polyfillio": "error",
		"no-use-before-define": "error",
		"no-useless-assignment": "error",
		"no-useless-backreference": "error",
		"no-useless-call": "error",
		"no-useless-catch": "error",
		"unicorn/no-useless-collection-argument": "error",
		"no-useless-computed-key": "error",
		"no-useless-concat": "error",
		"no-useless-constructor": "error",
		"typescript/no-useless-default-assignment": "error",
		"typescript/no-useless-empty-export": "error",
		"unicorn/no-useless-error-capture-stack-trace": "error",
		"no-useless-escape": "error",
		"unicorn/no-useless-fallback-in-spread": "error",
		"unicorn/no-useless-iterator-to-array": "error",
		"unicorn/no-useless-length-check": "error",
		"unicorn/no-useless-promise-resolve-reject": "error",
		"no-useless-rename": "error",
		"no-useless-return": "error",
		"unicorn/no-useless-spread": "error",
		// Sometimes listing empty cases helps readability
		"unicorn/no-useless-switch-case": "off",
		"unicorn/no-useless-undefined": "error",
		"no-var": "error",
		// Deprecated
		"typescript/no-var-requires": "off",
		"no-void": ["error", { allowAsStatement: true }],
		// Trust the developer
		"no-warning-comments": "off",
		// We do not use webpack
		"import/no-webpack-loader-syntax": "off",
		// We do not use classes
		"react/no-will-update-set-state": "off",
		// Handled by TypeScript
		"no-with": "off",
		"typescript/no-wrapper-object-types": "error",
		"unicorn/no-zero-fractions": "error",
		"typescript/non-nullable-type-assertion-style": "error",
		"oxc/number-arg-out-of-range": "error",
		// Handled by oxfmt
		"unicorn/number-literal-case": "off",
		// We may want to enable this
		"unicorn/numeric-separators-style": "off",
		"object-shorthand": ["error", "always"],
		"react/only-export-components": [
			"error",
			{
				allowConstantExport: true,
				allowExportNames: [
					/**
					 * Next.js specific names
					 */
					// Metadata (layout.js, page.js)
					"metadata",
					"generateMetadata",
					// Viewport (layout.js, page.js)
					"viewport",
					"generateViewport",
					// Static generation (page.js, layout.js, route.js)
					"generateStaticParams",
					// Route Segment Config (layout.js, page.js, route.js)
					"dynamic",
					"dynamicParams",
					"revalidate",
					"fetchCache",
					"runtime",
					"preferredRegion",
					"maxDuration",
				],
			},
		],
		"typescript/only-throw-error": "error",
		"oxc/only-used-in-recursion": "error",
		"operator-assignment": "error",
		"vitest/padding-around-after-all-blocks": "error",
		"promise/param-names": "error",
		"typescript/parameter-properties": "error",
		"unicorn/prefer-add-event-listener": "error",
		"unicorn/prefer-array-find": "error",
		"unicorn/prefer-array-flat": "error",
		"unicorn/prefer-array-flat-map": "error",
		"unicorn/prefer-array-index-of": "error",
		"unicorn/prefer-array-some": "error",
		"prefer-arrow-callback": "error",
		"typescript/prefer-as-const": "error",
		"unicorn/prefer-at": "error",
		"promise/prefer-await-to-callbacks": "error",
		"promise/prefer-await-to-then": "error",
		"unicorn/prefer-bigint-literals": "error",
		"unicorn/prefer-blob-reading-methods": "error",
		"vitest/prefer-called-exactly-once-with": "error",
		"vitest/prefer-called-once": "error",
		// We prefer called-once
		"vitest/prefer-called-times": "off",
		// Trust the developer
		"vitest/prefer-called-with": "off",
		"promise/prefer-catch": "error",
		"unicorn/prefer-class-fields": "error",
		"unicorn/prefer-classlist-toggle": "error",
		"unicorn/prefer-code-point": "error",
		"vitest/prefer-comparison-matcher": "error",
		"prefer-const": "error",
		"unicorn/prefer-date-now": "error",
		// We prefer named exports
		"import/prefer-default-export": "off",
		"unicorn/prefer-default-parameters": "error",
		"vitest/prefer-describe-function-title": "error",
		"prefer-destructuring": "error",
		"unicorn/prefer-dom-node-append": "error",
		"unicorn/prefer-dom-node-dataset": "error",
		"unicorn/prefer-dom-node-remove": "error",
		"unicorn/prefer-dom-node-text-content": "error",
		"vitest/prefer-each": "error",
		"typescript/prefer-enum-initializers": "error",
		"vitest/prefer-equality-matcher": "error",
		// We do not use classes
		"react/prefer-es6-class": "off",
		"unicorn/prefer-event-target": "error",
		"vitest/prefer-expect-assertions": [
			"error",
			{
				onlyFunctionsWithAsyncKeyword: true,
				onlyFunctionsWithExpectInCallback: true,
				onlyFunctionsWithExpectInLoop: true,
			},
		],
		"vitest/prefer-expect-resolves": "error",
		// Subjectively harder to read and write
		"vitest/prefer-expect-type-of": "off",
		// Trust the developer
		"prefer-exponentiation-operator": "off",
		"unicorn/prefer-export-from": "error",
		"typescript/prefer-find": "error",
		"typescript/prefer-for-of": "error",
		"react/prefer-function-component": "error",
		"typescript/prefer-function-type": "error",
		"unicorn/prefer-global-this": "error",
		"vitest/prefer-hooks-in-order": "error",
		"vitest/prefer-hooks-on-top": "error",
		"vitest/prefer-import-in-mock": "error",
		"unicorn/prefer-import-meta-properties": "error",
		"vitest/prefer-importing-vitest-globals": "error",
		"typescript/prefer-includes": "error",
		// Prefer the `typescript/prefer-includes` rule
		"unicorn/prefer-includes": "off",
		"unicorn/prefer-keyboard-event-key": "error",
		"typescript/prefer-literal-enum-member": ["error", { allowBitwiseExpressions: true }],
		"unicorn/prefer-logical-operator-over-ternary": "error",
		// Trust the developer
		"vitest/prefer-lowercase-title": "off",
		"unicorn/prefer-math-min-max": "error",
		"unicorn/prefer-math-trunc": "error",
		"vitest/prefer-mock-promise-shorthand": "error",
		"vitest/prefer-mock-return-shorthand": "error",
		"unicorn/prefer-modern-dom-apis": "error",
		"unicorn/prefer-modern-math-apis": "error",
		"unicorn/prefer-module": "error",
		"prefer-named-capture-group": "error",
		// Deprecated
		"typescript/prefer-namespace-keyword": "off",
		"unicorn/prefer-native-coercion-functions": "error",
		"unicorn/prefer-negative-index": "error",
		"unicorn/prefer-node-protocol": "error",
		"typescript/prefer-nullish-coalescing": "error",
		"unicorn/prefer-number-properties": ["error", { checkInfinity: true }],
		"prefer-numeric-literals": "error",
		"unicorn/prefer-object-from-entries": "error",
		"prefer-object-has-own": "error",
		"prefer-object-spread": "error",
		"unicorn/prefer-optional-catch-binding": "error",
		"typescript/prefer-optional-chain": "error",
		// Prefer `typescript/prefer-promise-reject-errors`
		"prefer-promise-reject-errors": "off",
		"typescript/prefer-promise-reject-errors": "error",
		"unicorn/prefer-prototype-methods": "error",
		"unicorn/prefer-query-selector": "error",
		// Trust the developer
		"typescript/prefer-readonly": "off",
		// Trust the developer
		"typescript/prefer-readonly-parameter-types": "off",
		"typescript/prefer-reduce-type-parameter": "error",
		"unicorn/prefer-reflect-apply": "error",
		// Trust the developers
		"prefer-regex-literals": "off",
		"typescript/prefer-regexp-exec": "error",
		"unicorn/prefer-regexp-test": "error",
		"unicorn/prefer-response-static-json": "error",
		"prefer-rest-params": "error",
		"typescript/prefer-return-this-type": "error",
		"unicorn/prefer-set-has": "error",
		"unicorn/prefer-set-size": "error",
		"unicorn/prefer-single-call": "error",
		"vitest/prefer-snapshot-hint": ["error", "always"],
		"prefer-spread": "error",
		// The example indicates this can hurt performance
		"unicorn/prefer-spread": "off",
		"vitest/prefer-spy-on": "error",
		"vitest/prefer-strict-boolean-matchers": "error",
		"vitest/prefer-strict-equal": "error",
		"unicorn/prefer-string-raw": "error",
		"unicorn/prefer-string-replace-all": "error",
		"unicorn/prefer-string-slice": "error",
		"typescript/prefer-string-starts-ends-with": "error",
		// Prefer the `typescript/prefer-string-starts-ends-with` rule
		"unicorn/prefer-string-starts-ends-with": "off",
		"unicorn/prefer-string-trim-start-end": "error",
		"unicorn/prefer-structured-clone": "error",
		"jsx-a11y/prefer-tag-over-role": "error",
		"prefer-template": "error",
		// Trust the developer
		"unicorn/prefer-ternary": "off",
		// Trust the developer
		"vitest/prefer-to-be": "off",
		// Trust the developer
		"vitest/prefer-to-be-falsy": "off",
		"vitest/prefer-to-be-object": "error",
		// Trust the developer
		"vitest/prefer-to-be-truthy": "off",
		"vitest/prefer-to-contain": "error",
		"vitest/prefer-to-have-been-called-times": "error",
		"vitest/prefer-to-have-length": "error",
		"vitest/prefer-todo": "error",
		"unicorn/prefer-top-level-await": "error",
		"typescript/prefer-ts-expect-error": "error",
		"unicorn/prefer-type-error": "error",
		"preserve-caught-error": "error",
		"typescript/promise-function-async": "error",
		"radix": "error",
		"react/react-compiler": "error",
		// Not necessary with modern setups
		"react/react-in-jsx-scope": "off",
		// Trust the developer
		"typescript/related-getter-setter-pairs": "off",
		// A little too fiddly, gets in the way
		"unicorn/relative-url-style": "off",
		"unicorn/require-array-join-separator": "error",
		"typescript/require-array-sort-compare": "error",
		// Inferior to type-aware rules
		"require-await": "off",
		"typescript/require-await": "error",
		"vitest/require-awaited-expect-poll": "error",
		"vitest/require-hook": "error",
		"vitest/require-local-test-context-for-concurrent-snapshots": "error",
		"vitest/require-mock-type-parameters": "error",
		"unicorn/require-module-attributes": "error",
		"unicorn/require-module-specifiers": "error",
		"unicorn/require-number-to-fixed-digits-argument": "error",
		"jsdoc/require-param": "error",
		"jsdoc/require-param-description": "error",
		"jsdoc/require-param-name": "error",
		// Handled by TypeScript
		"jsdoc/require-param-type": "off",
		// A little too fiddly, gets in the way
		"unicorn/require-post-message-target-origin": "off",
		"jsdoc/require-property": "error",
		"jsdoc/require-property-description": "error",
		"jsdoc/require-property-name": "error",
		// Handled by TypeScript
		"jsdoc/require-property-type": "off",
		// We do not use classes
		"react/require-render-return": "off",
		"jsdoc/require-returns": "error",
		"jsdoc/require-returns-description": "error",
		// Handled by TypeScript
		"jsdoc/require-returns-type": "off",
		// Default of 5_000 is fine
		"vitest/require-test-timeout": "off",
		// We use better-result
		"jsdoc/require-throws-description": "off",
		// We use better-result
		"jsdoc/require-throws-type": "off",
		"vitest/require-to-throw-message": "error",
		// Trust the developer
		"vitest/require-top-level-describe": "off",
		"require-unicode-regexp": "error",
		"require-yield": "error",
		"jsdoc/require-yields": "error",
		"jsdoc/require-yields-description": "error",
		// We use TypeScript
		"jsdoc/require-yields-type": "off",
		"typescript/restrict-plus-operands": "error",
		"typescript/restrict-template-expressions": "error",
		"typescript/return-await": ["error", "always"],
		"jsx-a11y/role-has-required-aria-props": "error",
		"jsx-a11y/role-supports-aria-props": "error",
		"react/rules-of-hooks": "error",
		"jsx-a11y/scope": "error",
		"react/self-closing-comp": "error",
		// Handled by oxfmt
		"sort-imports": "off",
		// Trust the developer
		"sort-keys": "off",
		// Trust the developer
		"sort-vars": "off",
		"promise/spec-only": "error",
		// We do not use classes
		"react/state-in-constructor": "off",
		"typescript/strict-boolean-expressions": "error",
		// Prefer typescript/no-misused-promises
		"typescript/strict-void-return": "off",
		"react/style-prop-object": "error",
		"unicorn/switch-case-braces": ["error", "always"],
		"unicorn/switch-case-break-position": "error",
		"typescript/switch-exhaustiveness-check": [
			"error",
			{ considerDefaultExhaustiveForUnions: true },
		],
		"symbol-description": "error",
		"jsx-a11y/tabindex-no-positive": "error",
		"unicorn/text-encoding-identifier-case": "error",
		"unicorn/throw-new-error": "error",
		"typescript/triple-slash-reference": "error",
		"import/unambiguous": "error",
		"typescript/unbound-method": "error",
		"unicode-bom": "error",
		"typescript/unified-signatures": "error",
		"oxc/uninvoked-array-callback": "error",
		"use-isnan": "error",
		"typescript/use-unknown-in-catch-callback-variable": "error",
		// Should be handled by TypeScript
		"vitest/valid-describe-callback": "off",
		"vitest/valid-expect": "error",
		"vitest/valid-expect-in-promise": "error",
		// Handled by TypeScript
		"promise/valid-params": "off",
		"vitest/valid-title": "error",
		"valid-typeof": "error",
		// Trust the developer
		"vars-on-top": "off",
		"react/void-dom-elements-no-children": "error",
		"vitest/warn-todo": "error",
		"yoda": ["error", "never", { exceptRange: true }],
	},
	overrides: [
		// Disable default exports for configuration files
		{
			files: ["vite.config.ts", "drizzle.config.ts"],
			rules: {
				"import/no-default-export": "off",
			},
		},
	],
});
