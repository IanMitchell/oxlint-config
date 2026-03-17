import { defineConfig } from "oxlint";

export const config = defineConfig({
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
	},
	rules: {
		/**
		 * eslint
		 */
		// Trust the dev. Many times you want to read but not set.
		"accessor-pairs": "off",
		"array-callback-return": ["error", { checkForEach: true, allowImplicit: true }],
		"arrow-body-style": "error",
		"block-scoped-var": "error",
		// While generally preferable, no need to error on this
		"capitalized-comments": "off",
		"class-methods-use-this": "error",
		// We may want to set this up for Agents
		"complexity": "off",
		// Handled by TypeScript
		"constructor-super": "off",
		"curly": "error",
		// I believe TypeScript handles this, but we may want to enable if not
		"default-case": "off",
		"default-case-last": "error",
		"default-param-last": "error",
		"eqeqeq": ["error", "always", { null: "ignore" }],
		"for-direction": "error",
		"func-names": "error",
		"func-style": [
			"error",
			"declaration",
			{ allowArrowFunctions: true, overrides: { namedExports: "declaration" } },
		],
		// Handled by TypeScript
		"getter-return": "off",
		"grouped-accessor-pairs": "error",
		"guard-for-in": "error",
		// A little too fiddly, gets in the way.
		"id-length": "off",
		// A little too fiddly, gets in the way.
		"init-declarations": "off",
		// We may want to set this up for Agents
		"max-classes-per-file": "off",
		// We may want to set this up for Agents
		"max-depth": "off",
		// We may want to set this up for Agents
		"max-lines": "off",
		// We may want to set this up for Agents
		"max-lines-per-function": "off",
		// We may want to set this up for Agents
		"max-nested-callbacks": "off",
		// We may want to set this up for Agents
		"max-params": "off",
		// We may want to set this up for Agents
		"max-statements": "off",
		"new-cap": ["error", { newIsCap: true, capIsNew: true, properties: true }],
		"no-alert": "error",
		"no-array-constructor": "error",
		"no-async-promise-executor": "error",
		"no-await-in-loop": "error",
		// Trust the developer
		"no-bitwise": "off",
		// Not necessary with strict mode
		"no-caller": "off",
		"no-case-declarations": "error",
		"no-class-assign": "error",
		"no-compare-neg-zero": "error",
		"no-cond-assign": "error",
		"no-console": "error",
		"no-const-assign": "error",
		"no-constant-binary-expression": "error",
		"no-constant-condition": "error",
		"no-constructor-return": "error",
		// Trust the developer
		"no-continue": "off",
		"no-control-regex": "error",
		"no-debugger": "error",
		"no-delete-var": "error",
		"no-div-regex": "error",
		// Handled by TypeScript
		"no-dupe-class-members": "off",
		"no-dupe-else-if": "error",
		// Handled by TypeScript
		"no-dupe-keys": "off",
		"no-duplicate-case": "error",
		"no-duplicate-imports": "error",
		"no-else-return": "error",
		"no-empty": "error",
		"no-empty-character-class": "error",
		"no-empty-function": "error",
		"no-empty-pattern": "error",
		"no-empty-static-block": "error",
		// Trust the developer
		"no-eq-null": "off",
		"no-eval": "error",
		"no-ex-assign": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-boolean-cast": "error",
		"no-extra-label": "error",
		"no-fallthrough": ["error", { allowEmptyCase: true }],
		// Handled by TypeScript
		"no-func-assign": "off",
		"no-global-assign": "error",
		"no-implicit-coercion": "error",
		"no-import-assign": "error",
		// Trust the dev
		"no-inline-comments": "off",
		"no-inner-declarations": "error",
		"no-invalid-regexp": "error",
		"no-irregular-whitespace": "error",
		// Incredibly unlikely
		"no-iterator": "off",
		"no-label-var": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-lonely-if": "error",
		"no-loop-func": "error",
		"no-loss-of-precision": "error",
		// A little too fiddly, gets in the way.
		"no-magic-numbers": "off",
		"no-misleading-character-class": "error",
		"no-multi-assign": "error",
		"no-multi-str": "error",
		// A little too fiddly, gets in the way.
		"no-negated-condition": "off",
		"no-nested-ternary": "error",
		"no-new": "error",
		"no-new-func": "error",
		// Handled by TypeScript
		"no-new-native-nonconstructor": "off",
		"no-new-wrappers": "error",
		// Incredibly unlikely
		"no-nonoctal-decimal-escape": "off",
		// Handled by TypeScript
		"no-obj-calls": "off",
		"no-object-constructor": "error",
		"no-param-reassign": "error",
		// Our formatter mandates semicolons
		"no-plusplus": "off",
		"no-promise-executor-return": "error",
		"no-proto": "error",
		"no-prototype-builtins": "error",
		"no-redeclare": "error",
		"no-regex-spaces": "error",
		// Not necessary
		"no-restricted-globals": "off",
		// This is a setting that should be enabled project by project
		"no-restricted-imports": "off",
		"no-return-assign": "error",
		"no-script-url": "error",
		"no-self-assign": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		// Handled by TypeScript
		"no-setter-return": "off",
		"no-shadow": "error",
		"no-shadow-restricted-names": "error",
		"no-sparse-arrays": "error",
		"no-template-curly-in-string": "error",
		// Trust the developer
		"no-ternary": "off",
		// Handled by TypeScript
		"no-this-before-super": "off",
		// Deprecated
		"no-throw-literal": "off",
		"no-unassigned-vars": "error",
		// Handled by TypeScript
		"no-undef": "off",
		// Prefer no-void
		"no-undefined": "off",
		"no-unexpected-multiline": "error",
		"no-unmodified-loop-condition": "error",
		"no-unneeded-ternary": ["error", { defaultAssignment: false }],
		"no-unreachable": "error",
		"no-unsafe-finally": "error",
		"no-unsafe-negation": "error",
		"no-unsafe-optional-chaining": ["error", { disallowArithmeticOperators: true }],
		"no-unused-expressions": "error",
		"no-unused-labels": "error",
		"no-unused-private-class-members": "error",
		"no-unused-vars": "error",
		"no-use-before-define": "error",
		"no-useless-backreference": "error",
		"no-useless-call": "error",
		"no-useless-catch": "error",
		"no-useless-computed-key": "error",
		"no-useless-concat": "error",
		"no-useless-constructor": "error",
		"no-useless-escape": "error",
		"no-useless-rename": "error",
		"no-useless-return": "error",
		"no-var": "error",
		"no-void": ["error", { allowAsStatement: true }],
		// Trust the developer
		"no-warning-comments": "off",
		// Handled by TypeScript
		"no-with": "off",
		"operator-assignment": "error",
		"prefer-const": "error",
		"prefer-destructuring": "error",
		// Trust the developer
		"prefer-exponentiation-operator": "off",
		"prefer-numeric-literals": "error",
		"prefer-object-has-own": "error",
		"prefer-object-spread": "error",
		// Prefer `typescript/prefer-promise-reject-errors`
		"prefer-promise-reject-errors": "off",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"preserve-caught-error": "error",
		"radix": "error",
		// Inferior to type-aware rules
		"require-await": "off",
		"require-yield": "error",
		// Handled by oxfmt
		"sort-imports": "off",
		// Trust the developer
		"sort-keys": "off",
		// Trust the developer
		"sort-vars": "off",
		"symbol-description": "error",
		"unicode-bom": "error",
		"use-isnan": "error",
		"valid-typeof": "error",
		// Trust the developer
		"vars-on-top": "off",
		"yoda": ["error", "never", { exceptRange: true }],

		/**
		 * Import
		 */
		"import/consistent-type-specifier-style": ["error", "prefer-top-level"],
		"import/default": "error",
		"import/export": "error",
		// Trust the developer
		"import/exports-last": "off",
		"import/extensions": ["error", "always", { "ignorePackages": true }],
		"import/first": "error",
		// Trust the developer
		"import/group-exports": "off",
		// We may want to turn this on for Agents
		"import/max-dependencies": "off",
		// Handled by TypeScropt
		"import/named": "off",
		// Handled by TypeScript
		"import/namespace": "off",
		"import/no-absolute-path": "error",
		"import/no-amd": "error",
		"import/no-anonymous-default-export": "error",
		"import/no-commonjs": "error",
		// Trust the developer
		"import/no-cycle": "off",
		// We want this, but too many libraries have it baked in
		"import/no-default-export": "off",
		"import/no-duplicates": ["error", { preferInline: true }],
		"import/no-dynamic-require": "error",
		"import/no-empty-named-blocks": "error",
		"import/no-mutable-exports": "error",
		"import/no-named-as-default": "error",
		"import/no-named-as-default-member": "error",
		"import/no-named-default": "error",
		// We prefer named exports
		"import/no-named-export": "off",
		"import/no-namespace": "error",
		// We need nodejs core libs
		"import/no-nodejs-modules": "off",
		// Trust the developer
		"import/no-relative-parent-imports": "off",
		"import/no-self-import": "error",
		// Breaks lifting side effect imports
		"import/no-unassigned-import": "off",
		// We do not use webpack
		"import/no-webpack-loader-syntax": "off",
		// We prefer default exports
		"import/prefer-default-export": "off",
		"import/unambiguous": "error",

		/**
		 * jsdoc
		 */
		"jsdoc/check-access": "error",
		"jsdoc/check-property-names": "error",
		"jsdoc/check-tag-names": ["error", { typed: true }],
		"jsdoc/empty-tags": "error",
		"jsdoc/implements-on-classes": "error",
		"jsdoc/no-defaults": "error",
		"jsdoc/require-param": "error",
		"jsdoc/require-param-description": "error",
		"jsdoc/require-param-name": "error",
		// Handled by TypeScript
		"jsdoc/require-param-type": "off",
		"jsdoc/require-property": "error",
		"jsdoc/require-property-description": "error",
		"jsdoc/require-property-name": "error",
		// Handled by TypeScript
		"jsdoc/require-property-type": "off",
		"jsdoc/require-returns": "error",
		"jsdoc/require-returns-description": "error",
		// Handled by TypeScript
		"jsdoc/require-returns-type": "off",
		"jsdoc/require-yields": "error",

		/**
		 * jsx-a11y
		 */
		"jsx-a11y/alt-text": "error",
		"jsx-a11y/anchor-ambiguous-text": "error",
		"jsx-a11y/anchor-has-content": "error",
		"jsx-a11y/anchor-is-valid": "error",
		"jsx-a11y/aria-activedescendant-has-tabindex": "error",
		"jsx-a11y/aria-props": "error",
		"jsx-a11y/aria-proptypes": "error",
		"jsx-a11y/aria-role": "error",
		"jsx-a11y/aria-unsupported-elements": "error",
		"jsx-a11y/autocomplete-valid": "error",
		"jsx-a11y/click-events-have-key-events": "error",
		"jsx-a11y/heading-has-content": "error",
		"jsx-a11y/html-has-lang": "error",
		"jsx-a11y/iframe-has-title": "error",
		"jsx-a11y/img-redundant-alt": ["error", { components: ["img", "Image"] }],
		"jsx-a11y/label-has-associated-control": "error",
		"jsx-a11y/lang": "error",
		"jsx-a11y/media-has-caption": "error",
		"jsx-a11y/mouse-events-have-key-events": "error",
		// This situation is extremely uncommon
		"jsx-a11y/no-access-key": "off",
		"jsx-a11y/no-aria-hidden-on-focusable": "error",
		// Autofocus should be used appropriately, not never used
		"jsx-a11y/no-autofocus": "off",
		// This situation is extremely uncommon
		"jsx-a11y/no-distracting-elements": "off",
		"jsx-a11y/no-noninteractive-tabindex": "error",
		"jsx-a11y/no-redundant-roles": "error",
		"jsx-a11y/no-static-element-interactions": "error",
		"jsx-a11y/prefer-tag-over-role": "error",
		"jsx-a11y/role-has-required-aria-props": "error",
		"jsx-a11y/role-supports-aria-props": "error",
		"jsx-a11y/scope": "error",
		"jsx-a11y/tabindex-no-positive": "error",

		/**
		 * nextjs
		 */
		"nextjs/google-font-display": "error",
		"nextjs/google-font-preconnect": "error",
		"nextjs/inline-script-id": "error",
		"nextjs/next-script-for-ga": "error",
		"nextjs/no-assign-module-variable": "error",
		"nextjs/no-async-client-component": "error",
		// Pages rule
		"nextjs/no-before-interactive-script-outside-document": "off",
		"nextjs/no-css-tags": "error",
		// Pages rule
		"nextjs/no-document-import-in-page": "off",
		// Pages rule
		"nextjs/no-duplicate-head": "off",
		"nextjs/no-head-element": "error",
		// Pages rule
		"nextjs/no-head-import-in-document": "off",
		"nextjs/no-html-link-for-pages": "error",
		"nextjs/no-img-element": "error",
		// Pages rule
		"nextjs/no-page-custom-font": "off",
		"nextjs/no-script-component-in-head": "error",
		// Pages rule
		"nextjs/no-styled-jsx-in-document": "off",
		"nextjs/no-sync-scripts": "error",
		"nextjs/no-title-in-document-head": "error",
		// Pages rule
		"nextjs/no-typos": "off",
		"nextjs/no-unwanted-polyfillio": "error",

		/**
		 * node
		 */
		// We use ESM
		"node/global-require": "off",
		"node/handle-callback-err": "error",
		// We use ESM
		"node/no-exports-assign": "off",
		// We use ESM
		"node/no-new-require": "off",
		// We use ESM
		"node/no-path-concat": "off",
		"node/no-process-env": "error",

		/**
		 * oxc
		 */
		"oxc/approx-constant": "error",
		"oxc/bad-array-method-on-arguments": "error",
		"oxc/bad-bitwise-operator": "error",
		"oxc/bad-char-at-comparison": "error",
		"oxc/bad-comparison-sequence": "error",
		"oxc/bad-min-max-func": "error",
		"oxc/bad-object-literal-comparison": "error",
		"oxc/bad-replace-all-arg": "error",
		"oxc/branches-sharing-code": "error",
		"oxc/const-comparisons": "error",
		"oxc/double-comparisons": "error",
		"oxc/erasing-op": "error",
		"oxc/misrefactored-assign-op": "error",
		"oxc/missing-throw": "error",
		"oxc/no-accumulating-spread": "error",
		// Meant for older codebases
		"oxc/no-async-await": "off",
		// We do not use Hono
		"oxc/no-async-endpoint-handlers": "off",
		"oxc/no-barrel-file": "error",
		"oxc/no-const-enum": "error",
		"oxc/no-map-spread": "error",
		// Meant for older codebases
		"oxc/no-optional-chaining": "off",
		// Meant for older codebases
		"oxc/no-rest-spread-properties": "off",
		"oxc/no-this-in-exported-function": "error",
		"oxc/number-arg-out-of-range": "error",
		"oxc/only-used-in-recursion": "error",
		"oxc/uninvoked-array-callback": "error",

		/**
		 * promise
		 */
		"promise/always-return": "error",
		// Too restrictive, largely covered by other rules
		"promise/avoid-new": "off",
		"promise/catch-or-return": "error",
		"promise/no-callback-in-promise": "error",
		"promise/no-multiple-resolved": "error",
		"promise/no-nesting": "error",
		"promise/no-new-statics": "error",
		"promise/no-promise-in-callback": "error",
		"promise/no-return-in-finally": "error",
		"promise/no-return-wrap": "error",
		"promise/param-names": "error",
		"promise/prefer-await-to-callbacks": "error",
		"promise/prefer-await-to-then": "error",
		"promise/prefer-catch": "error",
		"promise/spec-only": "error",
		// Handled by TypeScript
		"promise/valid-params": "off",

		/**
		 * react
		 */
		"react/button-has-type": "error",
		"react/checked-requires-onchange-or-readonly": "error",

		/**
		 * react-perf
		 */
		"react-perf/jsx-no-jsx-as-prop": "error",
		"react-perf/jsx-no-new-array-as-prop": "error",
		"react-perf/jsx-no-new-function-as-prop": "error",
		"react-perf/jsx-no-new-object-as-prop": "error",
		"react/display-name": "error",
		"react/exhaustive-deps": "error",
		// Project dependent
		"react/forbid-dom-props": "off",
		// Project dependent
		"react/forbid-elements": "off",
		"react/forward-ref-uses-ref": "error",
		"react/iframe-missing-sandbox": "error",
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
		"react/jsx-no-script-url": "error",
		"react/jsx-no-target-blank": "error",
		// Handled by TypeScript
		"react/jsx-no-undef": "off",
		"react/jsx-no-useless-fragment": "error",
		"react/jsx-pascal-case": "error",
		"react/jsx-props-no-spread-multi": "error",
		// Covered by TypeScript and too restrictive with libraries
		"react/jsx-props-no-spreading": "off",
		"react/no-array-index-key": "error",
		"react/no-children-prop": "error",
		"react/no-clone-element": "error",
		"react/no-danger": "error",
		"react/no-danger-with-children": "error",
		// We do not use classes
		"react/no-did-mount-set-state": "off",
		// We do not use classes
		"react/no-direct-mutation-state": "off",
		// We use React 19
		"react/no-find-dom-node": "off",
		// We do not use classes
		"react/no-is-mounted": "off",
		// We may want this for Agents
		"react/no-multi-comp": "off",
		"react/no-namespace": "error",
		"react/no-react-children": "error",
		// We do not use classes
		"react/no-redundant-should-component-update": "off",
		// We use React 19
		"react/no-render-return-value": "off",
		// We do not use classes
		"react/no-set-state": "off",
		// We use React 19
		"react/no-string-refs": "off",
		"react/no-this-in-sfc": "error",
		"react/no-unescaped-entities": "error",
		"react/no-unknown-property": ["error", { requireDataLowercase: true }],
		// We do not use classes
		"react/no-unsafe": "off",
		// We do not use classes
		"react/no-will-update-set-state": "off",
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
		// We do not use classes
		"react/prefer-es6-class": "off",
		// Not necessary with modern setups
		"react/react-in-jsx-scope": "off",
		// We do not use classes
		"react/require-render-return": "off",
		"react/rules-of-hooks": "error",
		"react/self-closing-comp": "error",
		// We do not use classes
		"react/state-in-constructor": "off",
		"react/style-prop-object": "error",
		"react/void-dom-elements-no-children": "error",

		/**
		 * typescript
		 */
		"typescript/adjacent-overload-signatures": "error",
		"typescript/array-type": ["error", { default: "array-simple" }],
		"typescript/await-thenable": "error",
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
		"typescript/class-literal-property-style": ["error", "fields"],
		"typescript/consistent-generic-constructors": "error",
		"typescript/consistent-indexed-object-style": ["error", "record"],
		"typescript/consistent-return": "error",
		"typescript/consistent-type-assertions": ["error", { assertionStyle: "never" }],
		"typescript/consistent-type-definitions": ["error", "interface"],
		"typescript/consistent-type-exports": "error",
		"typescript/consistent-type-imports": "error",
		"typescript/dot-notation": "error",
		// We would like this for exported functions only
		"typescript/explicit-function-return-type": "off",
		"typescript/explicit-module-boundary-types": "error",
		"typescript/no-array-delete": "error",
		"typescript/no-base-to-string": "error",
		"typescript/no-confusing-non-null-assertion": "error",
		"typescript/no-confusing-void-expression": "error",
		"typescript/no-deprecated": "error",
		"typescript/no-duplicate-enum-values": "error",
		"typescript/no-duplicate-type-constituents": "error",
		"typescript/no-dynamic-delete": "error",
		"typescript/no-empty-interface": "error",
		"typescript/no-empty-object-type": "error",
		"typescript/no-explicit-any": "error",
		"typescript/no-extra-non-null-assertion": "error",
		"typescript/no-extraneous-class": "error",
		"typescript/no-floating-promises": "error",
		"typescript/no-for-in-array": "error",
		"typescript/no-implied-eval": "error",
		"typescript/no-import-type-side-effects": "error",
		"typescript/no-inferrable-types": "error",
		"typescript/no-invalid-void-type": "error",
		"typescript/no-meaningless-void-operator": "error",
		"typescript/no-misused-new": "error",
		"typescript/no-misused-promises": "error",
		"typescript/no-misused-spread": "error",
		"typescript/no-mixed-enums": "error",
		"typescript/no-namespace": "error",
		"typescript/no-non-null-asserted-nullish-coalescing": "error",
		"typescript/no-non-null-asserted-optional-chain": "error",
		"typescript/no-non-null-assertion": "error",
		"typescript/no-redundant-type-constituents": "error",
		"typescript/no-require-imports": "error",
		// Project dependent
		"typescript/no-restricted-types": "off",
		"typescript/no-this-alias": "error",
		"typescript/no-unnecessary-boolean-literal-compare": "error",
		"typescript/no-unnecessary-condition": "error",
		// Makes code less readable
		"typescript/no-unnecessary-parameter-property-assignment": "off",
		"typescript/no-unnecessary-qualifier": "error",
		"typescript/no-unnecessary-template-expression": "error",
		"typescript/no-unnecessary-type-arguments": "error",
		"typescript/no-unnecessary-type-assertion": "error",
		"typescript/no-unnecessary-type-constraint": "error",
		"typescript/no-unnecessary-type-conversion": "error",
		"typescript/no-unnecessary-type-parameters": "error",
		"typescript/no-unsafe-argument": "error",
		"typescript/no-unsafe-assignment": "error",
		"typescript/no-unsafe-call": "error",
		"typescript/no-unsafe-declaration-merging": "error",
		"typescript/no-unsafe-enum-comparison": "error",
		"typescript/no-unsafe-function-type": "error",
		"typescript/no-unsafe-member-access": "error",
		"typescript/no-unsafe-return": "error",
		"typescript/no-unsafe-type-assertion": "error",
		"typescript/no-unsafe-unary-minus": "error",
		"typescript/no-useless-default-assignment": "error",
		"typescript/no-useless-empty-export": "error",
		// Deprecated
		"typescript/no-var-requires": "off",
		"typescript/no-wrapper-object-types": "error",
		"typescript/non-nullable-type-assertion-style": "error",
		"typescript/only-throw-error": "error",
		"typescript/parameter-properties": "error",
		"typescript/prefer-as-const": "error",
		"typescript/prefer-enum-initializers": "error",
		"typescript/prefer-find": "error",
		"typescript/prefer-for-of": "error",
		"typescript/prefer-function-type": "error",
		"typescript/prefer-includes": "error",
		"typescript/prefer-literal-enum-member": ["error", { allowBitwiseExpressions: true }],
		// Deprecated
		"typescript/prefer-namespace-keyword": "off",
		"typescript/prefer-nullish-coalescing": "error",
		"typescript/prefer-optional-chain": "error",
		"typescript/prefer-promise-reject-errors": "error",
		// Trust the developer
		"typescript/prefer-readonly": "off",
		// Trust the developer
		"typescript/prefer-readonly-parameter-types": "off",
		"typescript/prefer-reduce-type-parameter": "error",
		"typescript/prefer-regexp-exec": "error",
		"typescript/prefer-return-this-type": "error",
		"typescript/prefer-string-starts-ends-with": "error",
		"typescript/prefer-ts-expect-error": "error",
		"typescript/promise-function-async": "error",
		// Trust the developer
		"typescript/related-getter-setter-pairs": "off",
		"typescript/require-array-sort-compare": "error",
		"typescript/require-await": "error",
		"typescript/restrict-plus-operands": "error",
		"typescript/restrict-template-expressions": "error",
		"typescript/return-await": ["error", "always"],
		"typescript/strict-boolean-expressions": "error",
		"typescript/strict-void-return": "error",
		"typescript/switch-exhaustiveness-check": "error",
		"typescript/triple-slash-reference": "error",
		"typescript/unbound-method": "error",
		"typescript/unified-signatures": "error",
		"typescript/use-unknown-in-catch-callback-variable": "error",

		/**
		 * unicorn
		 */
		// Trust the developer
		"unicorn/catch-error-name": "off",
		// We don't use assert
		"unicorn/consistent-assert": "off",
		"unicorn/consistent-date-clone": "error",
		"unicorn/consistent-empty-array-spread": "error",
		"unicorn/consistent-existence-index-check": "error",
		"unicorn/consistent-function-scoping": "error",
		// Handled by oxfmt
		"unicorn/empty-brace-spaces": "off",
		"unicorn/error-message": "error",
		"unicorn/escape-case": "error",
		"unicorn/explicit-length-check": "error",
		"unicorn/filename-case": "error",
		"unicorn/new-for-builtins": "error",
		"unicorn/no-abusive-eslint-disable": "error",
		"unicorn/no-accessor-recursion": "error",
		"unicorn/no-anonymous-default-export": "error",
		"unicorn/no-array-callback-reference": "error",
		// Trust the developer
		"unicorn/no-array-for-each": "off",
		"unicorn/no-array-method-this-argument": "error",
		"unicorn/no-array-reduce": "error",
		"unicorn/no-array-reverse": "error",
		"unicorn/no-array-sort": "error",
		"unicorn/no-await-expression-member": "error",
		"unicorn/no-await-in-promise-methods": "error",
		// Trust the developer
		"unicorn/no-console-spaces": "off",
		"unicorn/no-document-cookie": "error",
		// Trust the developer
		"unicorn/no-empty-file": "off",
		"unicorn/no-hex-escape": "error",
		"unicorn/no-immediate-mutation": "error",
		"unicorn/no-instanceof-array": "error",
		"unicorn/no-instanceof-builtins": ["error", { useErrorIsError: true }],
		"unicorn/no-invalid-fetch-options": "error",
		"unicorn/no-invalid-remove-event-listener": "error",
		"unicorn/no-length-as-slice-end": "error",
		"unicorn/no-lonely-if": "error",
		"unicorn/no-magic-array-flat-depth": "error",
		"unicorn/no-negation-in-equality-check": "error",
		// Prefer the stricter `no-nested-ternary` rule
		"unicorn/no-nested-ternary": "off",
		"unicorn/no-new-array": "error",
		"unicorn/no-new-buffer": "error",
		// Disagree with the premise
		"unicorn/no-null": "off",
		"unicorn/no-object-as-default-parameter": "error",
		// Trust the developer
		"unicorn/no-process-exit": "off",
		"unicorn/no-single-promise-in-promise-methods": "error",
		"unicorn/no-static-only-class": "error",
		"unicorn/no-thenable": "error",
		// Prefer the `typescript/no-this-alias` rule
		"unicorn/no-this-assignment": "off",
		"unicorn/no-typeof-undefined": "error",
		"unicorn/no-unnecessary-array-flat-depth": "error",
		"unicorn/no-unnecessary-array-splice-count": "error",
		"unicorn/no-unnecessary-await": "error",
		"unicorn/no-unnecessary-slice-end": "error",
		"unicorn/no-unreadable-array-destructuring": "error",
		"unicorn/no-unreadable-iife": "error",
		"unicorn/no-useless-collection-argument": "error",
		"unicorn/no-useless-error-capture-stack-trace": "error",
		"unicorn/no-useless-fallback-in-spread": "error",
		"unicorn/no-useless-length-check": "error",
		"unicorn/no-useless-promise-resolve-reject": "error",
		"unicorn/no-useless-spread": "error",
		// Sometimes listing empty cases helps readability
		"unicorn/no-useless-switch-case": "off",
		"unicorn/no-useless-undefined": "error",
		"unicorn/no-zero-fractions": "error",
		"unicorn/number-literal-case": "error",
		// We may want to enable this
		"unicorn/numeric-separators-style": "off",
		"unicorn/prefer-add-event-listener": "error",
		"unicorn/prefer-array-find": "error",
		"unicorn/prefer-array-flat": "error",
		"unicorn/prefer-array-flat-map": "error",
		"unicorn/prefer-array-index-of": "error",
		"unicorn/prefer-array-some": "error",
		"unicorn/prefer-at": "error",
		"unicorn/prefer-bigint-literals": "error",
		"unicorn/prefer-blob-reading-methods": "error",
		"unicorn/prefer-class-fields": "error",
		"unicorn/prefer-classlist-toggle": "error",
		"unicorn/prefer-code-point": "error",
		"unicorn/prefer-date-now": "error",
		"unicorn/prefer-default-parameters": "error",
		"unicorn/prefer-dom-node-append": "error",
		"unicorn/prefer-dom-node-dataset": "error",
		"unicorn/prefer-dom-node-remove": "error",
		"unicorn/prefer-dom-node-text-content": "error",
		"unicorn/prefer-event-target": "error",
		"unicorn/prefer-global-this": "error",
		// Prefer the `typescript/prefer-includes` rule
		"unicorn/prefer-includes": "off",
		"unicorn/prefer-keyboard-event-key": "error",
		"unicorn/prefer-logical-operator-over-ternary": "error",
		"unicorn/prefer-math-min-max": "error",
		"unicorn/prefer-math-trunc": "error",
		"unicorn/prefer-modern-dom-apis": "error",
		"unicorn/prefer-modern-math-apis": "error",
		"unicorn/prefer-module": "error",
		"unicorn/prefer-native-coercion-functions": "error",
		"unicorn/prefer-negative-index": "error",
		"unicorn/prefer-node-protocol": "error",
		"unicorn/prefer-number-properties": ["error", { checkInfinity: true }],
		"unicorn/prefer-object-from-entries": "error",
		"unicorn/prefer-optional-catch-binding": "error",
		"unicorn/prefer-prototype-methods": "error",
		"unicorn/prefer-query-selector": "error",
		"unicorn/prefer-reflect-apply": "error",
		"unicorn/prefer-regexp-test": "error",
		"unicorn/prefer-response-static-json": "error",
		"unicorn/prefer-set-has": "error",
		"unicorn/prefer-set-size": "error",
		// The example indicates this can hurt performance
		"unicorn/prefer-spread": "off",
		"unicorn/prefer-string-raw": "error",
		"unicorn/prefer-string-replace-all": "error",
		"unicorn/prefer-string-slice": "error",
		// Prefer the `typescript/prefer-string-starts-ends-with` rule
		"unicorn/prefer-string-starts-ends-with": "off",
		"unicorn/prefer-string-trim-start-end": "error",
		"unicorn/prefer-structured-clone": "error",
		// Trust the developer
		"unicorn/prefer-ternary": "off",
		"unicorn/prefer-top-level-await": "error",
		"unicorn/prefer-type-error": "error",
		// A little too fiddly, gets in the way
		"unicorn/relative-url-style": "off",
		"unicorn/require-array-join-separator": "error",
		"unicorn/require-module-attributes": "error",
		"unicorn/require-module-specifiers": "error",
		"unicorn/require-number-to-fixed-digits-argument": "error",
		// A little too fiddly, gets in the way
		"unicorn/require-post-message-target-origin": "off",
		"unicorn/switch-case-braces": ["error", "always"],
		"unicorn/text-encoding-identifier-case": "error",
		"unicorn/throw-new-error": "error",

		/**
		 * vitest
		 */
		"vitest/consistent-each-for": [
			"error",
			{
				describe: "each",
				it: "each",
				suite: "each",
				test: "each",
			},
		],
		"vitest/consistent-test-filename": [
			"error",
			{ allTestPattern: "__tests__", pattern: ".*\.test\.tsx?$" },
		],
		"vitest/consistent-vitest-vi": ["error", { fn: "vitest" }],
		"vitest/hoisted-apis-on-top": "error",
		"vitest/no-conditional-tests": "error",
		"vitest/no-import-node-test": "error",
		// We don't configure for globals
		"vitest/no-importing-vitest-globals": "off",
		"vitest/prefer-called-once": "error",
		// We prefer called-once
		"vitest/prefer-called-times": "off",
		"vitest/prefer-describe-function-title": "error",
		// Subjectively harder to read and write
		"vitest/prefer-expect-type-of": "off",
		"vitest/prefer-import-in-mock": "error",
		// Trust the developer
		"vitest/prefer-to-be-falsy": "off",
		"vitest/prefer-to-be-object": "error",
		// Trust the developer
		"vitest/prefer-to-be-truthy": "off",
		"vitest/require-local-test-context-for-concurrent-snapshots": "error",
		"vitest/warn-todo": "error",
	},
});
