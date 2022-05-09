const baseUrl = process.uniEnv.BASE_URL;

const request = (options) => {
	uni.showLoading({
		title: "加载中",
		mask: true
	});
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${baseUrl}${options.url}`,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res) => {
				if (res.statusCode !== 200) {
					// return uni.showToast({
					// 	title: '获取数据失败',
					// 	icon: 'error'
					// })
				}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title: '请求接口失败',
					icon: 'error'
				})
				reject(err)
			},
			complete: () => {
				uni.hideLoading()
			}
		})
	})
}


export default request
