const path = require('path');
const webpack = require('webpack');

module.exports = {
    cache: true,

    debug: true,

    devtool: '#eval-cheap-module-source-map',

    entry: [
        path.resolve (__dirname, 'src', 'index.js')
    ],

    eslint: {
        configFile: '.eslintrc',
        emitError: true,
        failOnError: true,
        failOnWarning: false,
        formatter: require('eslint-friendly-formatter')
    },

    externals: {
        'murmurhash3js': {
            amd: 'murmurhash3js',
            commonjs: 'murmurhash3js',
            commonjs2: 'murmurhash3js',
            root: 'murmurHash3'
        }
    },

    module: {
        preLoaders: [
            {
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'eslint-loader',
                test: /\.js$/
            }
        ],

        loaders: [
            {
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'DEV_ONLY')
                ],
                loader: 'babel',
                test: /\.js$/
            }
        ]
    },

    output: {
        filename: 'crio.js',
        library: 'crio',
        path: path.resolve(__dirname, 'dist'),
        umdNamedDefine: true
    },

    plugins: [
        new webpack.EnvironmentPlugin([
            'NODE_ENV'
        ])
    ],

    resolve: {
        extensions: [
            '',
            '.js'
        ],

        fallback: [
            path.join (__dirname, 'src')
        ],

        root: __dirname
    }
};