const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    entry: './src/client.js',
    output: {
        filename: 'client_bundle.js',
        path: path.resolve(__dirname, 'build/public'),
        publicPath: '/build/public'
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