import { createFileRoute } from "@tanstack/react-router";
import { WordCloud } from "./-components";

// 时间2024-10-29
const words = [
	{
		text: "Webpack",
		value: 64700,
		uil: "https://github.com/webpack/webpack",
	},
	{
		text: "Vite",
		value: 68200,
		url: "https://github.com/vitejs/vite",
	},
	{
		text: "Rspack",
		value: 9700,
		utl: "https://github.com/web-infra-dev/rspack",
	},
	{
		text: "Mako",
		value: 1800,
		url: "https://github.com/umijs/mako",
	},
];

const VChart = () => {
	return (
		<div className="w-[300px] h-[400px]">
			<WordCloud data={words} />
		</div>
	);
};

export const Route = createFileRoute("/visualization/vchart/")({
	component: VChart,
});
