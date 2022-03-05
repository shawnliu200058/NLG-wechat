<template>
		<view class="container">
			<view class="column1">
				<slot name="column1"></slot>
			</view>
			<view class="column2">
				<slot name="column2"></slot>
			</view>
			<view class="column3">
				<slot name="column3"></slot>
			</view>
		</view>
</template>

<script>
	export default {
		props: {

		}
	}
</script>

<style scoped lang="scss">
	.container {
		display: grid;
		grid-template-columns: 1fr 3fr 6fr;
		grid-column-gap: 20rpx;
		align-items: center;
		width: 600rpx;
	}
</style>
