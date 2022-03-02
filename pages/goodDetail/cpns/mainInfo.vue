<template>
	<view class="container">
		<uni-card>
			<image :src="goodInfo.displayPicUrl" mode="aspectFill"></image>
			<uni-title type="h3" :title="goodInfo.name"></uni-title>
			<uni-title title="上报统计数据"></uni-title>

			<view class="price-info">
				<text>￥</text>
				<text class="price">{{goodInfo.price.toFixed(2)}}</text>
				<text class="unit">/{{goodInfo.unit}}</text>
			</view>
			
			<view class="bottom">
				<view class="express">
					<uni-icons type="checkbox"></uni-icons>
					<text>快递配送</text>
				</view>
				<view>
					<text style="margin-right: 10rpx;">销量：</text>
					<text>库存: {{goodInfo.stock}}</text>
				</view>
			</view>
			
			<uni-tag :text="`规格 ${goodInfo.specification}`" inverted></uni-tag>
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
		.header {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			z-index: 999;
		}
		 
		.uni-card {
			image {
				width: 100%;
			}
		}
		
		.price-info {
			.price {
				color: red;
				font-size: 20px;
			}
			.unit {
				font-size: 14px;
			}
		}
		
		.bottom {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: $uni-font-size-sm;
			margin-bottom: 20rpx;
			
			.express {
				display: flex;
				align-items: center;
				
				.uni-icons {
					margin-right: 10rpx;
				}
			}
		}
	}
</style>
