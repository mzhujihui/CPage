import { useCommonStore } from "@/store";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useMount } from "react-use";
import HomeLayout from "./-layout";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	const { toggleThemeMode } = useCommonStore();

	useMount(() => {
		toggleThemeMode();
	});

	return (
		<HomeLayout>
			<Outlet />
			<TanStackRouterDevtools position="bottom-right" />
		</HomeLayout>
	);
}
