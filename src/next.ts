import { defineConfig, type OxlintConfig } from "oxlint";

export const config: OxlintConfig = defineConfig({
	plugins: ["nextjs"],
	rules: {
		"nextjs/google-font-display": "error",
		"nextjs/google-font-preconnect": "error",
		"nextjs/inline-script-id": "error",
		"nextjs/next-script-for-ga": "error",
		"nextjs/no-assign-module-variable": "error",
		"nextjs/no-async-client-component": "error",
		"nextjs/no-before-interactive-script-outside-document": "off",
		"nextjs/no-css-tags": "error",
		"nextjs/no-document-import-in-page": "off",
		"nextjs/no-duplicate-head": "off",
		"nextjs/no-head-element": "error",
		"nextjs/no-head-import-in-document": "off",
		"nextjs/no-html-link-for-pages": "error",
		"nextjs/no-img-element": "error",
		"nextjs/no-page-custom-font": "off",
		"nextjs/no-script-component-in-head": "error",
		"nextjs/no-styled-jsx-in-document": "off",
		"nextjs/no-sync-scripts": "error",
		"nextjs/no-title-in-document-head": "error",
		"nextjs/no-typos": "off",
		"nextjs/no-unwanted-polyfillio": "error",
	},
});
