const path = require('path');
const resolve = dir => {
    return path.join(__dirname, dir)
}
module.exports = {
    /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
    // baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
    // publicPath: process.env.NODE_ENV === 'production' ? '/public/' : './',
    publicPath: './',
    //更改入口和出口文件名
    // pages: {
    //     index: {
    //         entry: "examples/main.js",
    //         template: "public/index.html",
    //         filename: "index.html"
    //     },
    // },
    // 扩展 webpack 配置，使 packages 加入编译
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add('/packages/')
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })
    },
    /* 输出文件目录：在npm run build时，生成文件的目录名称 */
    outputDir: 'jooos-ui',
    css: {
        extract: false
    },
    /* 放置生成的静态资源 (mixin、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
    assetsDir: "assets",
    /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
    productionSourceMap: false,
    /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
    filenameHashing: false,
    /* 代码保存时进行eslint检测 */
    lintOnSave: false,
    /* webpack-dev-server 相关配置 */
    devServer: {
        /* 自动打开浏览器 */
        open: false,
        /* 设置为0.0.0.0则所有的地址均能访问 */
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
    }
};