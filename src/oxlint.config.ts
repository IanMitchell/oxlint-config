import { defineConfig, type OxlintConfig } from "oxlint";
import { eslintConfig } from "./plugins/eslint.ts";
import { importConfig } from "./plugins/import.ts";
import { jsdocConfig } from "./plugins/jsdoc.ts";
import { jsxA11yConfig } from "./plugins/jsx-a11y.ts";
import { nodeConfig } from "./plugins/node.ts";
import { oxcConfig } from "./plugins/oxc.ts";
import { promiseConfig } from "./plugins/promise.ts";
import { reactPerfConfig } from "./plugins/react-perf.ts";
import { reactConfig } from "./plugins/react.ts";
import { typescriptConfig } from "./plugins/typescript.ts";
import { unicornConfig } from "./plugins/unicorn.ts";
import { vitestConfig } from "./plugins/vitest.ts";

const pluginConfigs: OxlintConfig[] = [
	eslintConfig,
	importConfig,
	jsdocConfig,
	jsxA11yConfig,
	nodeConfig,
	oxcConfig,
	promiseConfig,
	reactConfig,
	reactPerfConfig,
	typescriptConfig,
	unicornConfig,
	vitestConfig,
];

export const config: OxlintConfig = defineConfig({
	plugins: pluginConfigs.flatMap((pluginConfig) => pluginConfig.plugins ?? []),
	options: {
		typeAware: true,
		typeCheck: true,
	},
	rules: Object.assign({}, ...pluginConfigs.map((pluginConfig) => pluginConfig.rules)),
	overrides: pluginConfigs.flatMap((pluginConfig) => pluginConfig.overrides ?? []),
});
