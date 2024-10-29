import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import HomeLayout from "./-layout";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<HomeLayout>
			<Outlet />
			<TanStackRouterDevtools position="bottom-right" />
		</HomeLayout>
	);
}
