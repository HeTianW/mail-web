const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin') 

const htmlPlugin=new HtmlWebpackPlugin({
    template: path.join(__dirname,'./src/index.html'),
    filename: 'index.html' 
})

//向外暴露一个打包的配置对象； webpack是基于Node构建的，所以支持所有Node API和语法
module.exports={
    mode:'production',  
    //entry:
    plugins:[
        htmlPlugin
    ],

    module:{
        rules:[
            {test:/\.jsx?/i,use:{
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-react']
                }
            }}
        ]
    },
    devtool:'source-map'

}