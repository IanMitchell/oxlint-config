# @0x57/oxlint-config

An opinionated shared [oxlint](https://github.com/oxc-project/oxc) config.

## Usage

```sh
bun add -D @0x57/oxlint-config
```

```ts
import { config } from "@0x57/oxlint-config";
export default config;
```

The combined `config` includes every standard plugin ruleset. Individual rulesets are also
available as named exports, such as `typescriptConfig`, `reactConfig`, and `vitestConfig`.

## Next.js Rules

If you're using Next.js, you can specify additional rules in your config:

```ts
import { defineConfig } from "oxlint";
import { config, nextConfig } from "@0x57/oxlint-config";

export default defineConfig({
	...config,
	plugins: [...config.plugins, ...nextConfig.plugins],
	rules: { ...config.rules, ...nextConfig.rules },
});
```
