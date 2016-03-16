var path = require('path');
var webpack = require('webpack');
var precss = require('precss');

const babelQuery = {
	presets: ['es2015', 'stage-0', 'react'],
};

module.exports = {
	entry: {
		test: [path.join(__dirname, 'tests.bootstrap.js')],
	},
	output: {
		path: path.join(__dirname, './static'),
		filename: '[name].js',
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, loader: 'babel', query: babelQuery, include: path.join(__dirname, 'src/client') },
			{ test: /\.scss$/, loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss?parser=postcss-scss' },
		],
	},
	postcss: [
		precss(),
	],
	resolve: {
		extensions: ['', '.js', '.jsx'],
		modulesDirectories: ['src', 'node_modules'],
	},
	node: {
		fs: 'empty',
	},
};
