import { IconDarkMode } from "@douyinfe/semi-icons-lab";
import { Avatar, Button, Dropdown, Layout, Nav } from "@douyinfe/semi-ui";

import { useCommonStore } from "@/store";

export default function HomeHeader() {
	const { Header } = Layout;

	const { toggleThemeMode } = useCommonStore();

	return (
		<Header className="w-full">
			<Nav
				style={{ height: "var(--header-height)" }}
				className="!bg-transparent !border-b-0"
				mode="horizontal"
				footer={
					<div className="flex items-center gap-x-3">
						<Button
							theme="borderless"
							icon={<IconDarkMode size="large" />}
							onClick={toggleThemeMode}
						/>

						<Dropdown
							position="bottomRight"
							render={
								<Dropdown.Menu>
									<Dropdown.Item onClick={() => {}}>退出登录</Dropdown.Item>
								</Dropdown.Menu>
							}
						>
							<Avatar color="orange" size="extra-small">
								A
							</Avatar>
						</Dropdown>
					</div>
				}
			/>
		</Header>
	);
}
