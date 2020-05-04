const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const mode = process.env.NODE_ENV || 'development';

module.exports = {
    mode: mode,
    target: 'node',
    entry: './server.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }

            }
        ]
    },
    externals: [webpackNodeExternals()]
}