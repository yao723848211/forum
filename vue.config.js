module.exports={
    devServer:{
        open: true,
        contentBase: 'src',
        port: 4076,
        hot: true,
        proxy:{
            "/api":{
                target:"http://59.111.92.205:8098",
                changeOrigin: true,
                // pathRewrite:{
                //     "^/api":""
                // }
            }
        }
    },
}