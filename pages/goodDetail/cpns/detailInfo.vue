<template>
	<view class="container">
		<uni-card>
			<view class="title vertical-center">
				<text>商品详情</text>
			</view>
			
			<view>
				<template v-for="item in goodInfo.detailPic">
					<image :src="item.url" :key="item.id" style="width: 100%;" mode=""></image>
				</template>
			</view>
		</uni-card>
	</view>
</template>

<script>
	export default {
		props: {
			goodInfo: {
				type: Object,
				required: true
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		margin-bottom: 120rpx;
		.title {
			height: 30rpx;
			font-size: 12px;
			border-left: 10rpx solid green;
			padding-left: 10rpx;
			margin-bottom: 10rpx;
		}
	}
</style>
