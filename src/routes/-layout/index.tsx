import { Layout } from "@douyinfe/semi-ui";

import bg from "@/assets/images/bg.svg";

import HomeHeader from "./header";
import LeftNav from "./nav";

export default function HomeLayout({ children }) {
	const { Sider, Content } = Layout;
	return (
		<Layout
			className="h-[100vh] bg-no-repeat bg-cover bg-left-top"
			style={{
				backgroundColor: "#EFEFEF",
				backgroundImage: `url("${bg}")`,
				backgroundSize: "100% auto",
			}}
		>
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
