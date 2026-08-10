import { defineConfig, type OxlintConfig } from "oxlint";

export const nodeConfig: OxlintConfig = defineConfig({
	plugins: ["node"],
	rules: {
		// Handled by TypeScript.
		"node/callback-return": "off",
		// The shared config targets ESM.
		"node/exports-style": "off",
		// The shared config targets ESM.
		"node/global-require": "off",
		// Modern promise-based APIs do not use callback error parameters.
		"node/handle-callback-err": "off",
		// The shared config targets ESM.
		"node/no-exports-assign": "off",
		// The shared config targets ESM and does not use `require`.
		"node/no-mixed-requires": "error",
		// The shared config targets ESM.
		"node/no-new-require": "off",
		// The shared config targets ESM.
		"node/no-path-concat": "off",
		"node/no-process-env": "error",
		"node/no-sync": "error",
		// The shared config targets ESM.
		"node/no-top-level-await": "off",
	},
});
