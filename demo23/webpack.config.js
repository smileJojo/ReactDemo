module.exports = {
	entry:'./app.js', //程序入口文件
	output:{
		path:'./public/build', //所有打包好的资源的存放位置

		publicPath:'./build', //使用url-loader的资源的前缀
		filename:'bundle.js', //生成的打包文件名
	},
	module:{
		loaders:[
			{
				test:/\.(js)$/,  //用于脾气额加载器支持的文件格式的正则表达式
				loader:'jsx-loader?harmony'//加载器支持通过查询字符串的方式接受参数
			},
			{
				test:/\.(css)$/,
				loader:'style-loader!css-loader' //多个加载器通过“！”连接
			},{
				test:/\.(png|jpg)$/,
				loader:'url-loader?size=8192'//url-loader支持base64
			}
		]
	}
}