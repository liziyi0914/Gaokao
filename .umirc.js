
// ref: https://umijs.org/config/
export default {
	history: 'hash',
	publicPath: '/Gaokao/',
	treeShaking: true,
	plugins: [
		// ref: https://umijs.org/plugin/umi-plugin-react.html
		['umi-plugin-react', {
			antd: true,
			dva: false,
			dynamicImport: {
				loadingComponent: './Loading',
				webpackChunkName: true
			},
			title: 'gaokao',
			dll: false,
			fastClick: true,
			routes: {
				exclude: [
					/components\//,
				],
			},
		}],
	],
}
