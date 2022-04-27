<template>
	<view class="container">
		<template v-for="item in list" v-if="item.status">
			<view class="good-item" :key="item.id" @click="toDetail(item.id)">
				<image :src="item.displayPicUrl" mode=""></image>
				<view class="title">
					<text>{{item.name}}</text>
					<text class="price">{{item | priceFilter}}</text>
					<view class="plus">+</view>
				</view>
			</view>
		</template>
	</view>
	<!-- <uni-row>
			<template v-for="item in list">
				<uni-col :span="12" style="height: 400rpx;">
					<view class="good-item" :key="item.id">
						<image :src="item.displayPicUrl" mode=""></image>
						<view class="title">
							<text>{{item.name}}</text>
							<view class="plus">+</view>
						</view>
					</view>
				</uni-col>
			</template>
	</uni-row> -->
</template>

<script>
	import { mapGetters } from 'vuex'
	
	export default {
		data() {
			return {
				
			}
		},
		computed: {
			...mapGetters(['goodList']),
			list() {
				return this.goodList
			}
		},
		filters: {
			priceFilter(item) {
				return `￥${item.price.toFixed(2)}/${item.unit}`
			}
		},
		methods: {
			toDetail(id) {
				this.$Router.push({
					path: '/pages/goodDetail/goodDetail',
					query: {
						goodId: id
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		display: grid;
		grid-template-rows: 400rpx;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 20rpx 20rpx;
		padding: 20rpx;

		.good-item {
			background-color: $uni-bg-color;
			border-color: $uni-border-color;
			border-radius: 10rpx;
			height: 400rpx;
			box-shadow: 0 0 20rpx #bababa;
			
			image {
				width: 100%;
				height: 300rpx;
				border-radius: 10rpx;
			}

			.title {
				width: 100%;
				position: relative;
				margin-left: 16rpx;
				
				.price {
					position: absolute;
					left: 0;
					top: 46rpx;
					color: red;
				}

				.plus {
					display: flex;
					position: absolute;
					right: 20rpx;
					justify-content: center;
					/* 水平居中 */
					align-items: center;
					/* 垂直居中 */
					background-color: #00ffbf;
					border-radius: 50%;
					color: #FFFFFF;
					width: 40rpx;
					height: 40rpx;
				}

				text {
					font-size: $uni-font-size-base;
				}
			}
		}
	}
</style>
