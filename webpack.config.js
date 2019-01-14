const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    context: __dirname,
    entry: {
        vender: [
            'lodash',
            'react',
            'react-dom',
            'react-router',
            'classnames'
        ],
        main: [
            './libs/reset.css',
            './src/index.tsx'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts/[name].js',
        chunkFilename: 'scripts/[name].chunk.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[path][name]---[local]'
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                config: {
                                    path: path.resolve(__dirname, 'postcss.config.js')
                                }
                            }
                        }
                    ]
                })
            },
            {
                test: /\.png$|\.gif$|\.jpg$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]?[hash:8]',
                    outputPath: 'assets/images',
                    publicPath: '/assets/images',
                }
            }
        ]
    },
    target: 'web',
    devtool: 'source-map',
    stats: {
        colors: true
    },
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        inline: true,
        compress: true,
        publicPath: '/',
        historyApiFallback: true,
        disableHostCheck: true,
        host: '0.0.0.0',
        port: 8088,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/public/index.html',
            chunksSortMode: 'dependency',
        }),
        new ExtractTextPlugin({
            filename: 'styles/[name].css',
            allChunks: true
        }),
        new CopyWebpackPlugin([
            {
                from: './libs',
                to: 'libs'
            }
        ]),
    ]
}