var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var argv = require('yargs').argv;

//判断当前运行环境是开发模式还是生产模式
const nodeEnv = process.env.NODE_ENV || 'development';
const isPro = nodeEnv === 'production';

console.log('当前运行环境：',isPro ? 'production' : 'development')

var plugins = [
	new ExtractTextPlugin('styles.css'),
	new webpack.optimize.CommonsChunkPlugin({
		name:'vendor',
		minChunks: function (module) {
			// 该配置假定你引入的 vendor 存在于 node_modules 目录中
            return module.context && module.context.indexOf('node_modules') !== -1;
		}
	}),
	new webpack.DefinePlugin({
        // 定义全局变量
        'process.env':{
            'NODE_ENV': JSON.stringify(nodeEnv)
        }
    })
    ,
    new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
        filename: path.join(__dirname, './index.html'), //生成的html存放路径
        template: 'template/index.html', //html模板路径
        hash: true,    //为静态资源生成hash值
    })
]

var app = ['./entry'];

if(isPro) {
	new webpack.LoaderOptionsPlugin({
	    minimize: true,
	    debug: false
	}),
	new webpack.optimize.UglifyJsPlugin({
	    sourceMap: true,
	    comments: false,
	    ie8: true
	})
} else {
	app.unshift('react-hot-loader/patch', 'webpack-dev-server/client?http://localhost:8888', 'webpack/hot/only-dev-server')
	// 'react-hot-loader/patch' 开启 React 代码的模块热替换(HMR)
	// 'webpack-dev-server/client?http://localhost:8888'为 webpack-dev-server 的环境打包代码
    // 然后连接到指定服务器域名与端口，可以换成本机ip
    // 'webpack/hot/only-dev-server'为热替换(HMR)打包好代码
    // only- 意味着只有成功更新运行代码才会执行热替换(HMR)
	plugins.push(
		new webpack.HotModuleReplacementPlugin(),
		// 开启全局的模块热替换(HMR)
        new webpack.NamedModulesPlugin(),
        // 控制台输出模块命名美化
        new webpack.NoEmitOnErrorsPlugin()
        //这样可以确保输出资源不会包含错误
	)
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    devtool: isPro ? 'source-map' : 'inline-source-map',
    entry: {
        app: app
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build'),
        publicPath: isPro ? './build/' : './build/',
        chunkFilename: '[name].js'
    },
    // BASE_URL是全局的api接口访问地址
    plugins,
    // alias是配置全局的路径入口名称，只要涉及到下面配置的文件路径，可以直接用定义的单个字母表示整个路径
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.join(__dirname, './src')
        ],
        alias: {
            "actions": path.resolve(__dirname, "src/actions"),
            "components": path.resolve(__dirname, "src/components"),
            "containers": path.resolve(__dirname, "src/containers"),
            "reducers": path.resolve(__dirname, "src/reducers"),
            "utils": path.resolve(__dirname, "src/utils")
        }
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader?cacheDirectory=true'
            }
        }, {
            test: /\.(less|css)$/,
            use: ExtractTextPlugin.extract({
                use: ["css-loader", "less-loader", "postcss-loader"]
            })
        }, {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: ['url-loader?publicPath=/build/&limit=10000&name=files/[md5:hash:base64:10].[ext]'],
        }]
    },
    devServer: {
        hot: true,
        compress: true,
        port: 8888,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname),
        publicPath: '/build/',
        stats: {
            modules: false,
            chunks: false
        },
    },
};