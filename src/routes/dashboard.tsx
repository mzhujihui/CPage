import { Typing } from "@/components/shadcn/";
import { createFileRoute } from "@tanstack/react-router";

const Dashboard = () => {
	return (
		<div>
			<Typing text="Rspack, 基于 Rust 的高性能 Web 打包工具" />
		</div>
	);
};

export const Route = createFileRoute("/dashboard")({
	component: Dashboard,
});
