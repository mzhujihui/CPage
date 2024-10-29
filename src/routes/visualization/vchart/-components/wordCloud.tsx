import { VChart } from "@visactor/react-vchart";

interface WordData {
	text: string;
	value: number;
}

interface PropsType {
	data: WordData[];
	width?: number;
	height?: number;
}

function WordCloud({ data = [] }: PropsType) {
	if (data.length === 0) return null;

	return (
		<VChart
			spec={{
				type: "wordCloud",
				maskShape: "circle",
				padding: 0,
				nameField: "text",
				valueField: "value",
				seriesField: "value",
				fontFamilyField: "PingFang SC, Microsoft YaHei",
				fontSizeRange: [10, 32],
				fontWeightRange: [400, 600],
				data: {
					name: "word",
					values: data,
				},
				wordCloudConfig: {
					// 数据中有超长文本时, 超出画布的文本部分被裁剪
					// drawOutOfBound: 'clip',
					zoomToFit: {
						// 当单词数量较少时会对文字进行放大以适应画布宽高
						enlarge: true,
						// 当单词放置不下时会对画布进行整体缩放以放置尽量多的单词
						shrink: true,
						fontSizeLimitMin: 0,
					},
				},
			}}
		/>
	);
}
export default WordCloud;
