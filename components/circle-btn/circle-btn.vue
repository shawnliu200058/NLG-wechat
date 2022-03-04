<template>
	<view class="container center">
		<view class="btn center">{{text}}</view>
	</view>
</template>

<script>
	export default {
		props: {
			text: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
.container {
	.btn {
		padding: 20rpx 280rpx;
		border-radius: 40rpx;
		color: #F8F8F8;
		background-color: #0bd667;
	}
}
</style>
