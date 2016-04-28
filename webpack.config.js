/**
 * Created by zhangguo on 16-4-19.
 */
module.exports = {
	entry: "./test/index.js",
	output: {
		path: __dirname,
		filename: "/build/build.js"
	},
	watch: true,
	module: {
		loaders: [
			{ test: /\.tpl\.html|\.json$/, loader: "string" }
		]
	},
	resolve: {
		extensions: ['', '.js', '.json', '.html']
	}
};