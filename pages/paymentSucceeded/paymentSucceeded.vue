<template>
	<view class="container center">
		<uni-icons type="checkbox-filled" size="100" color="#18BC37"></uni-icons>
		<uni-title title="支付成功!" type="h1"></uni-title>
		<circle-btn @click.native="goToHome" text="返回首页"></circle-btn>
		<circle-btn @click.native="goToOrder" text="查看订单" bgColor="#626cff"></circle-btn>
	</view>
</template>

<script>
	import CircleBtn from '@/components/circle-btn/circle-btn.vue'
	
	export default {
		data() {
			return {
				
			}
		},
		components: {
			CircleBtn
		},
		beforeMount() {
			this.generateOrder()
		},
		mounted() {
			var a = document.getElementsByClassName('uni-page-head-hd')[0]
			a.style.display = 'none';
		},
		methods: {
			generateOrder() {
				console.log(this.$Route.query)
			},
			goToHome() {
				this.$Router.push({
					name: 'index'
				})
			},
			goToOrder() {
				this.$Router.push({
					name: 'myOrder'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		flex-direction: column;
		margin-top: 30rpx;
		// color: #626cff;
		
		.btn {
			margin: 20rpx;
			width: 200rpx;
			border: 1px solid red;
		}
	}
</style>
