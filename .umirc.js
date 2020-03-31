
// ref: https://umijs.org/config/
export default {
	history: 'hash',
	publicPath: '/gaokao/',
	treeShaking: true,
	plugins: [
		// ref: https://umijs.org/plugin/umi-plugin-react.html
		['umi-plugin-react', {
			antd: true,
			dva: false,
			dynamicImport: false,
			title: 'gaokao',
			dll: false,

			routes: {
				exclude: [
					/components\//,
				],
			},
		}],
	],
}
