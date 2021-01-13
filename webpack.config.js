module.exports = {
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
    // 配置转发代理
    devServer: {
        disableHostCheck: true,
        clientLogLevel: 'warning',
        hot: true,
        compress: true,
        proxy: {
            '/api': {
                target: 'http://192.168.0.122:8080',
                ws: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    }
};