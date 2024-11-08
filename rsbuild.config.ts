import { SemiRspackPlugin } from "@douyinfe/semi-rspack-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginSvgr } from "@rsbuild/plugin-svgr";
import { TanStackRouterRspack } from "@tanstack/router-plugin/rspack";

export default defineConfig({
	plugins: [pluginReact(), pluginSass(), pluginSvgr()],
	source: {
		alias: {
			"@": "./src",
		},
	},
	tools: {
		rspack: {
			plugins: [
				TanStackRouterRspack(),
				new SemiRspackPlugin({
					theme: "@semi-bot/semi-theme-jianying",
				}),
			],
		},
	},
});
