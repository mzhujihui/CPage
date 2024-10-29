import { createFileRoute } from "@tanstack/react-router";

const Dashboard = () => {
	return <div>Dashboard</div>;
};

export const Route = createFileRoute("/dashboard")({
	component: () => Dashboard,
});
