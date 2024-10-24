import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";
import { TanStackRouterRspack } from "@tanstack/router-plugin/rspack";

export default defineConfig({
	plugins: [pluginReact(), pluginSass()],
	tools: {
		rspack: {
			plugins: [TanStackRouterRspack()],
		},
	},
});
