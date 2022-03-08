<template>
	<view class="container center">
		<view class="btn center" :style="{'--bgColor': bgColor}">{{text}}</view>
	</view>
</template>

<script>
	export default {
		props: {
			text: {
				type: String,
				default: ''
			},
			bgColor: {
				type: String,
				default: '#0bd667'
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
		background-color: var(--bgColor);
	}
}
</style>
