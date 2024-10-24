import { Button, Input } from "@douyinfe/semi-ui";

const App = () => {
	return (
		<div>
			<h1 className="text-purple-400">Rsbuild with React</h1>
			<p>Start building amazing things with Rsbuild.</p>
			<Button theme="light" type="primary">
				浅色主要
			</Button>
			<Input defaultValue="hi" />
		</div>
	);
};

export default App;
