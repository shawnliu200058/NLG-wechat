//B页面
<template>
	<web-view :src="url" :progress="false"></web-view>
</template>

<script>
	export default {
		data() {
			return {
				url: '',
				title: ''
			}
		},
		onLoad(op) {
			console.log(op.url)
			this.url = op.url
			console.log(this.url)
		},
		onReady() { //改变标题
			uni.setNavigationBarTitle({
				title: '支付页'
			})
		}
	}
</script>
