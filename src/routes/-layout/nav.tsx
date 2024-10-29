import Logo from "@/assets/images/logo.svg?react";
import { IconDoubleChevronLeft, IconKanban } from "@douyinfe/semi-icons";
import { Icon, Nav } from "@douyinfe/semi-ui";
import type { OnSelectedData } from "@douyinfe/semi-ui/lib/es/navigation";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const items = [
	{ itemKey: "/dashboard", text: "仪表看板", icon: <IconKanban /> },
	{ itemKey: "/test1", text: "活动管理", icon: <IconDoubleChevronLeft /> },
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

	const onOpenChange = (data) => {
		setOpenKeys([...data.openKeys]);
	};

	const onSelect = (data: OnSelectedData) => {
		navigate({ to: data.selectedKeys[0] });
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
