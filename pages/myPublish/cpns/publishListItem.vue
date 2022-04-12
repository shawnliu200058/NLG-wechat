<template>
	<view class="container">
		<uni-card>
			<div @click="goGoodDetail(publishItem.id)">
				<three-column :gridPartition="[2, 6, 2]" class="row-divide">
					<template #column1>
						<image :src="publishItem.displayPicUrl" mode="aspectFill" class="img"></image>
					</template>
					<template #column2>
						<view class="text-info left-align">
							<text>{{publishItem.name}}</text>
							<text class="detail">{{publishItem.detail}}</text>
						</view>
					</template>
					<template #column3>
						<view class="text-info right-align">
							<text class="right">￥{{publishItem.price.toFixed(2)}}</text>
							<text class="right detail">库存：{{publishItem.stock}}</text>
						</view>
					</template>
				</three-column>
			</div>

			<u-divider></u-divider>

			<!-- <text class="right-align total-price">
				总价￥{{orderItem.total_price.toFixed(2)}}</text> -->

			<three-column :gridPartition="[4, 1, 5]">
				<template #column3>
					<view class="right-align">
						<u-button type="primary" :plain="true" text="编辑商品" @click="goPublish" shape="circle"></u-button>
						<del-publish style="margin-left: 30rpx;" :publishItem="publishItem"></del-publish>
					</view>
				</template>
			</three-column>

		</uni-card>

	</view>
</template>

<script>
	import ThreeColumn from '@/layout/three-column/three-column.vue'
	import DelPublish from './delPublish.vue'

	export default {
		props: {
			publishItem: {
				type: Object,
				required: true
			}
		},
		components: {
			ThreeColumn,
			DelPublish
		},
		beforeMount() {
			// console.log(this.publishItem)
		},
		methods: {
			goPublish() {
				this.$Router.push({
					name: 'publish'
				})
			},
			goGoodDetail(id) {
				this.$Router.push({
					name: 'goodDetail',
					params: {
						goodId: id
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		.row-divide {}

		.img {
			width: 200rpx;
			height: 200rpx;
		}

		.text-info {
			flex-direction: column;

			.right {
				margin-left: auto;
			}

			.detail {
				color: $uni-text-color-grey;
			}
		}

		.total-price {
			font-size: $uni-font-size-lg;
			margin-bottom: 30rpx;
		}

	}
</style>
