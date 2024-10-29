import Logo from "@/assets/images/logo.svg?react";

import {
	IconColorPalette,
	IconDoubleChevronLeft,
	IconKanban,
} from "@douyinfe/semi-icons";
import { Nav } from "@douyinfe/semi-ui";
import type { OnSelectedData } from "@douyinfe/semi-ui/lib/es/navigation";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const items = [
	{ itemKey: "/dashboard", text: "仪表盘", icon: <IconKanban /> },
	{
		itemKey: "/visualization",
		text: "数据可视化",
		icon: <IconColorPalette />,
	},
	{
		text: "任务平台",
		icon: <IconDoubleChevronLeft />,
		itemKey: "/test2",
		items: ["任务管理", "用户任务查询"],
	},
];

export default function LeftNav() {
	const location = useLocation();
	const navigate = useNavigate();

	const [selectedKeys, setSelectedKeys] = useState(["/"]);
	const [openKeys, setOpenKeys] = useState<string[]>([]);

	// @ts-ignore
	const onOpenChange = (data) => {
		console.log("openKeys", data.openKeys);
		setOpenKeys([...data.openKeys]);
	};

	const onSelect = (data: OnSelectedData) => {
		const to = data.selectedKeys?.[0] ? data.selectedKeys[0].toString() : "";
		navigate({ to });
	};

	useEffect(() => {
		setSelectedKeys([location.pathname]);
	}, [location.pathname]);

	useEffect(() => {
		console.log("selectedKeys", selectedKeys);
	}, [selectedKeys]);

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
			items={items}
			header={{
				logo: <Logo className="w-6 h-6" />,
				text: "CPage",
				style: { paddingBottom: "0", paddingTop: "16px" },
			}}
			footer={{
				collapseButton: true,
				collapseText: (collapsed) => (collapsed ? "展开" : "收起"),
			}}
			onSelect={onSelect}
		/>
	);
}
