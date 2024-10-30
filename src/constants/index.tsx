import { IconColorPalette, IconKanban } from "@douyinfe/semi-icons";
import type { NavItems } from "@douyinfe/semi-ui/lib/es/navigation";

export const navItems: NavItems = [
	{ itemKey: "/dashboard", text: "仪表盘", icon: <IconKanban /> },
	{
		itemKey: "/visualization",
		text: "数据可视化",
		icon: <IconColorPalette />,
		items: [
			{
				itemKey: "/visualization/vchart",
				text: "VChart",
			},
			{
				itemKey: "/visualization/nivo",
				text: "Nivo",
			},
		],
	},
];
