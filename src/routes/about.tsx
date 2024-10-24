import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";

export const Route = createFileRoute("/about")({
	component: AboutComponent,
});

function AboutComponent() {
	return (
		<div className="p-2">
			<h3 className="text-orange-400">About</h3>
		</div>
	);
}
