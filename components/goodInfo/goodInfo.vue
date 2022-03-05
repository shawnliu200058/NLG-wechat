<template>
	<view class="container">
		<view class="vertical-center">
			<slot name="checkbox"></slot>
			<!-- <image :src="item.displayPicUrl" mode="aspectFill"></image> -->
			<slot name="img"></slot>
		</view>
		<view class="good-item">
			<slot name="mainInfo">
				<view class="common-padding">{{item.name}}</view>
				<uni-title :title="`￥${item.price.toFixed(2)}/${item.unit}`" type="h4" color="red"></uni-title>
			</slot>
			<slot name="count"></slot>
			<slot name="number-box"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				required: true
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		display: grid;
		grid-template-columns: 4fr 6fr;
		grid-column-gap: 20rpx;
		align-items: center;
		padding-top: 20rpx;

		.good-item {}

		// image {
		// 	margin: 0 20rpx;
		// 	width: 200rpx;
		// 	height: 200rpx;
		// }

		.common-padding {
			padding-bottom: 10rpx;
		}

		.stock {
			font-size: 12px;
			color: $uni-text-color-grey;
		}
	}
</style>
