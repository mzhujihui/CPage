import Logo from "@/assets/images/logo.svg?react";

import { navItems } from "@/constants";
import { useCommonStore } from "@/store";
import { Nav } from "@douyinfe/semi-ui";
import type { OnSelectedData } from "@douyinfe/semi-ui/lib/es/navigation";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export default function LeftNav() {
	const location = useLocation();
	const navigate = useNavigate();

	const { isNavCollapsed, toggleNavCollapsed } = useCommonStore();

	const [selectedKeys, setSelectedKeys] = useState(["/"]);
	const [openKeys, setOpenKeys] = useState<string[]>([]);

	// @ts-ignore
	const onOpenChange = (data) => {
		setOpenKeys([...data.openKeys]);
	};

	const onSelect = (data: OnSelectedData) => {
		const to = data.selectedKeys?.[0] ? data.selectedKeys[0].toString() : "";
		navigate({ to });
	};

	useEffect(() => {
		setSelectedKeys([location.pathname]);
	}, [location.pathname]);

	return (
		<Nav
			style={{
				maxWidth: "var(--menu-width)",
				height: "100vh",
				overflowY: "auto",
				backgroundColor: "var(--semi-grey-4, #EFEFEF)",
			}}
			className="!border-r-0 !pl-4 !pr-0"
			openKeys={openKeys}
			onOpenChange={onOpenChange}
			selectedKeys={selectedKeys}
			items={navItems}
			header={{
				logo: <Logo className="w-6 h-6" />,
				text: "CPage",
				style: { paddingBottom: "0", paddingTop: "16px" },
			}}
			isCollapsed={isNavCollapsed}
			footer={{
				collapseButton: true,
				collapseText: (collapsed) => (collapsed ? "展开" : "收起"),
				onClick: toggleNavCollapsed,
			}}
			onSelect={onSelect}
		/>
	);
}
