module.exports = {
	// 开发环境 服务器端配置
    devServer: {
		// 反向代理
        proxy: {
			// 代理路径  http://192.168.1.102/api
            '/api': {
				// 代理目标路径  
                target: 'http://192.168.1.102:8001',
                // 允许跨域
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}