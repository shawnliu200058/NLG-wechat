function showToastBack(uni, title, that, delay = 300) {
	uni.showToast({
		title,
		icon: 'success',
		complete: () => {
			setTimeout(() => {
				that.$Router.back(1, {
					success:(...arg)=>{
						console.log(arg)
					}
				})
			}, delay)
		}
	})
}

export {
	showToastBack
}