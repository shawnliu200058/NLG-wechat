function showToastBack(uni, title, that, delay = 500) {
	uni.showToast({
		title,
		icon: 'success',
		duration: 1000,
		success: () => {
			setTimeout(() => {
				that.$Router.back(1, {
					success:(...arg)=>{
						console.log(arg)
					}
				})
				// that.$Router.relace({name: 'address'})
			}, delay)
		}
	})
}

export {
	showToastBack
}