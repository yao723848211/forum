module.exports={
    devServer:{
        open: true,
        contentBase: 'src',
        port: 4072,
        hot: true,
        proxy:{
            "/api":{
                target:"http://59.111.92.205:8098",
                changeOrigin: true,
                // pathRewrite:{
                //     "^/api":""
                // }
            },
            "/musicapi":{
                target:"http://59.111.92.205:8089",
                changeOrigin: true,
                pathRewrite:{
                    "^/musicapi":""
                }
            },

        }
    },
}