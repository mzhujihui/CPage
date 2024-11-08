import { Layout } from "@douyinfe/semi-ui";

import HomeHeader from "./header";
import LeftNav from "./nav";

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { Sider, Content } = Layout;
	return (
		<Layout className="h-[100vh] bg-semi-color-bg-0">
			<Sider>
				<LeftNav />
			</Sider>

			<Layout className="h-[100vh]">
				<div>
					<HomeHeader />
				</div>

				<Content className="flex-1 px-4 my-4" style={{ overflow: "auto" }}>
					<div className="h-full">{children}</div>
				</Content>
			</Layout>
		</Layout>
	);
}
