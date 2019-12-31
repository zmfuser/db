const webpack = require('webpack')
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    runtimeCompiler: true,
    lintOnSave: false,
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    devServer: {
        proxy: {
            '/supervision-pc/*': {
                // target: 'http://10.72.24.255:8098', 
                target: 'http://139.9.44.85:8090',
                ws: true,
                changeOrigin: true
            }
        }
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                "window.jQuery": 'jquery'
            })
        ]
    },
    
}