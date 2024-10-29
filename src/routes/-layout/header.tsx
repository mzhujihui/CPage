import { Avatar, Dropdown, Layout, Nav } from "@douyinfe/semi-ui";

export default function HomeHeader() {
	const { Header } = Layout;

	return (
		<Header className="w-full">
			<Nav
				style={{ height: "var(--header-height)" }}
				className="!bg-transparent !border-b-0"
				mode="horizontal"
				footer={
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
				}
			/>
		</Header>
	);
}
